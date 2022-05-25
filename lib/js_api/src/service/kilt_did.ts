import {DemoKeystore, LightDidDetails, SigningAlgorithms} from '@kiltprotocol/did';
import * as Kilt from '@kiltprotocol/sdk-js';
import { VerificationKeyType } from '@kiltprotocol/types'

async function didCreation(): Promise<void> {
    console.log("didCreation");

    const authenticationSeed = '0x123456789';

    const keystore = new Kilt.Did.DemoKeystore();

    const authenticationKeyPublicDetails = await keystore.generateKeypair({
        alg: SigningAlgorithms.Ed25519,
        seed: authenticationSeed
    });

    console.log("authenticationKeyPublicDetails " + authenticationKeyPublicDetails.publicKey);

    // Create a light DID from the generated authentication key.
    const lightDID = LightDidDetails.fromDetails({
        authenticationKey: {
        publicKey: authenticationKeyPublicDetails.publicKey,
        type: VerificationKeyType.Ed25519
        }
    })
    console.log(lightDID.did)
}

didCreation();

// export default({
//     didCreation
// });