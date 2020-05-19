---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/New-OMEConfiguration
applicable: Exchange Online
title: New-OMEConfiguration
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# New-OMEConfiguration

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-OMEConfiguration cmdlet to create a Microsoft Office 365 Message Encryption (OME) configuration.

> [!NOTE]
> We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
New-OMEConfiguration [-Identity] <OrganizationIdParameter>
 [-BackgroundColor <String>]
 [-DisclaimerText <String>]
 [-EmailText <String>]
 [-ExternalMailExpiryInDays <Int32>]
 [-Image <Byte[]>]
 [-IntroductionText <String>]
 [-OTPEnabled <Boolean>]
 [-PortalText <String>]
 [-ReadButtonText <String>]
 [-SocialIdSignIn <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-OMEConfiguration -Identity "Contoso Marketing" -EmailText "Encrypted message enclosed." -PortalText "This portal is encrypted." -DisclaimerText "Encryption security disclaimer." -Image (Get-Content "C:\Temp\OME Logo.gif" -Encoding byte)
```

This example creates a new OME configuration named "Contoso Marketing" with the specified values specified. Unused parameters get the default values.

## PARAMETERS

### -Identity
The Identity parameter specifies a unique name for the OME configuration object. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -BackgroundColor
The BackgroundColor parameter specifies the background color. Valid values are:

- An available HTML hexadecimal \(hex triplet\) color code value \(for example, 0x000000 is white\).

- An available text value \(for example, yellow is 0x00FFFF00\).

- $null \(blank\). This is the default value.

For the list of available hex and text values, see [Background colors for Office 365 Message Encryption](https://support.office.com/article/1508cb35-c5ff-4523-b579-947b21d5515f).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisclaimerText
The DisclaimerText parameter specifies the disclaimer text in the email that contains the encrypted message. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailText
The EmailText parameter specifies the default text that accompanies encrypted email messages. The default text appears above the instructions for viewing encrypted messages. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMailExpiryInDays
This parameter is only available with a Microsoft 365 Advanced Message Encryption subscription.

The ExternalMailExpiryInDays parameter specifies the number of days that the encrypted message is available to external recipients in the Microsoft 365 portal. A valid value is an integer from 0 to 730. The value 0 means the messages will never expire. The default value is 0.

```yaml
Type: String
Parameter Sets: Int32
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Image
The Image parameter identifies and uploads an image that will be displayed in the email message and in the Office 365 portal.

You need to read the file to a byte-encoded object using the Get-Content cmdlet, for example, -Image (Get-Content "C:\\Temp\\OME Logo.gif" -Encoding byte)

- Supported file formats: .png, .jpg, .bmp, or .tiff

- Optimal size of logo file: less than 40 KB

- Optimal dimensions of logo image: 170x70 pixels

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IntroductionText
The IntroductionText parameter specifies the default text that accompanies encrypted email messages. The default text appears below the recipient email address for viewing the encrypted message. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OTPEnabled
The OTPEnabled parameter specifies whether to allow recipients to use a one-time passcode to view encrypted messages. Valid values are:

- $true: Recipients can use a one-time passcode to view encrypted messages. This is the default value.

- $false: Recipients can't use a one-time passcode to view encrypted messages. The recipient is required to sign in using an Office 365 work or school account.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PortalText
The PortalText parameter specifies the text that appears at the top of the encrypted email viewing portal. The maximum length is 128 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadButtonText
The ReadButtonText parameter specifies the text that appears on the "Read Message" button. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SocialIdSignIn
The SocialIdSignIn parameter specifies whether a user is allowed to view an encrypted message in the Office 365 portal using their own social network id (Google, Yahoo, etc). Valid values are:

- $true: Social network ID sign in is allowed. This is the default value.

- $false: Social network ID sign in is not allowed. Whether the recipient can use a one-time passcode or their Office 365 work or school account is controlled by the OTPEnabled parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
