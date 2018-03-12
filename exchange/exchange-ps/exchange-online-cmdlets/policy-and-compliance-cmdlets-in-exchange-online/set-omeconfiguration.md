---
title: "Set-OMEConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 3ef0aec0-ce28-411d-abe8-7236f082af1b
description: "This cmdlet is available only in the cloud-based service."
---

# Set-OMEConfiguration

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-OMEConfiguration** cmdlet to configure Microsoft Office 365 Message Encryption (OME).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-OMEConfiguration -Identity <OMEConfigurationIdParameter> [-ClientEncryptionEnabled <$true | $false>] [-DisclaimerText <String>] [-EmailText <String>] [-ExpirationOptionEnabled <$true | $false>] [-Image <Byte[]>] [-OTPEnabled <$true | $false>] [-PortalText <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example uses the **Set-OMEConfiguration** cmdlet to set all the parameters. Note the use of the **Get-Content** command to provide the input for the _Image_ parameter.
  
```
Set-OMEConfiguration -Identity "OME Configuration" -EmailText "Encrypted message enclosed." -PortalText "This portal is encrypted." -DisclaimerText "Encryption security disclaimer." -Image (Get-Content "C:\Temp\OME Logo.gif" -Encoding byte)
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.OMEConfigurationIdParameter  <br/> |The  _Identity_ parameter specifies the OME configuration that you want to modify. The default OME configuration has the _Identity_ value " `OME Configuration`". You can also use "default".  <br/> |
| _ClientEncryptionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DisclaimerText_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisclaimerText_ parameter specifies the disclaimer text in the email that contains the encrypted message. The maximum length is 1024 characters. <br/> To remove existing text and use the default value, use the value  `$null` for this parameter. <br/> |
| _EmailText_ <br/> |Optional  <br/> |System.String  <br/> |The  _EmailText_ parameter specifies the default text that accompanies encrypted email messages. The default text appears above the instructions for viewing encrypted messages. The maximum length is 1024 characters. <br/> To remove existing text and use the default value, use the value  `$null` for this parameter. <br/> |
| _ExpirationOptionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Image_ <br/> |Optional  <br/> |System.Byte[]  <br/> | The _Image_ parameter identifies and uploads an image that will be displayed in the email message and in the Office 365 portal. <br/>  You need to read the file to a byte-encoded object using the **Get-Content** cmdlet, for example, `-Image (Get-Content "C:\Temp\OME Logo.gif" -Encoding byte)` <br/>  Supported file formats: .png, .jpg, .bmp, or .tiff <br/>  Optimal size of logo file: less than 40 KB <br/>  Optimal dimensions of logo image: 170x70 pixels <br/>  To remove an existing image and use the default image, use the value `$null` for this parameter. <br/> |
| _OTPEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _OTPEnabled_ parameter specifies whether to allow recipients to use a one-time passcode to view encrypted messages. Valid values are: <br/>  `$true`: Recipients can use a one-time passcode to view encrypted messages. This is the default value.  <br/>  `$false`: Recipients can't use a one-time passcode to view encrypted messages. The recipient is required to sign in using an Office 365 work or school account.  <br/> |
| _PortalText_ <br/> |Optional  <br/> |System.String  <br/> |The  _PortalText_ parameter specifies the text that appears at the top of the encrypted mail viewing portal. The maximum length is 128 characters. <br/> To remove existing text and use the default value, use the value  `$null` for this parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

