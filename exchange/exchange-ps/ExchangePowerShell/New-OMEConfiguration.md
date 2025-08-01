---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-omeconfiguration
schema: 2.0.0
title: New-OMEConfiguration
---

# New-OMEConfiguration

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-OMEConfiguration cmdlet to create a Microsoft Purview Message Encryption configuration.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-OMEConfiguration [-Identity] <OrganizationIdParameter>
 [-BackgroundColor <String>]
 [-Confirm]
 [-DisclaimerText <String>]
 [-EmailText <String>]
 [-ExternalMailExpiryInDays <Int32>]
 [-Image <Byte[]>]
 [-IntroductionText <String>]
 [-OTPEnabled <Boolean>]
 [-PortalText <String>]
 [-PrivacyStatementUrl <String>]
 [-ReadButtonText <String>]
 [-SocialIdSignIn <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-OMEConfiguration -Identity "Contoso Marketing" -EmailText "Encrypted message enclosed." -PortalText "This portal is encrypted." -DisclaimerText "Encryption security disclaimer." -Image ([System.IO.File]::ReadAllBytes('C:\Temp\OME Logo.gif'))
```

This example creates a new OME configuration named "Contoso Marketing" with the specified values specified. Unused parameters get the default values.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies a unique name for the OME configuration object. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -BackgroundColor

> Applicable: Exchange Online

The BackgroundColor parameter specifies the background color. Valid values are:

- An available HTML hexadecimal (hex triplet) color code value (for example, `0x000000` is white).
- An available text value (for example, `yellow` is 0x00FFFF00).
- $null (blank). This is the default value.

For more information, see [Add your organization's brand to your encrypted messages](https://learn.microsoft.com/purview/add-your-organization-brand-to-encrypted-messages).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisclaimerText

> Applicable: Exchange Online

The DisclaimerText parameter specifies the disclaimer text in the email that contains the encrypted message. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailText

> Applicable: Exchange Online

The EmailText parameter specifies the default text that accompanies encrypted email messages. The default text appears above the instructions for viewing encrypted messages. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMailExpiryInDays

> Applicable: Exchange Online

This parameter is available only with a Microsoft 365 Advanced Message Encryption subscription.

The ExternalMailExpiryInDays parameter specifies the number of days that the encrypted message is available to external recipients in the Microsoft 365 portal. A valid value is an integer from 0 to 730. The value 0 means the messages will never expire. The default value is 0.

In the output of the Get-OMEConfiguration cmdlet, the value of this parameter is displayed in the ExternalMailExpiryInterval property.

```yaml
Type: String
Parameter Sets: Int32
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Image

> Applicable: Exchange Online

The Image parameter identifies and uploads an image that will be displayed in the email message and in the Microsoft 365 admin center.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

- Supported file formats: .png, .jpg, .bmp, or .tiff
- Optimal size of logo file: less than 40 KB
- Optimal dimensions of logo image: 170x70 pixels

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IntroductionText

> Applicable: Exchange Online

The IntroductionText parameter specifies the default text that accompanies encrypted email messages. The default text appears below the recipient email address for viewing the encrypted message. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OTPEnabled

> Applicable: Exchange Online

The OTPEnabled parameter specifies whether to allow recipients to use a one-time passcode to view encrypted messages. Valid values are:

- $true: Recipients can use a one-time passcode to view encrypted messages. This is the default value.
- $false: Recipients can't use a one-time passcode to view encrypted messages. The recipient is required to sign in using a Microsoft 365 work or school account.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PortalText

> Applicable: Exchange Online

The PortalText parameter specifies the text that appears at the top of the encrypted email viewing portal. The maximum length is 128 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivacyStatementUrl

> Applicable: Exchange Online

{{ Fill PrivacyStatementUrl Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadButtonText

> Applicable: Exchange Online

The ReadButtonText parameter specifies the text that appears on the "Read Message" button. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SocialIdSignIn

> Applicable: Exchange Online

The SocialIdSignIn parameter specifies whether a user is allowed to view an encrypted message in the Microsoft 365 admin center using their own social network id (Google, Yahoo, etc). Valid values are:

- $true: Social network ID sign in is allowed. This is the default value.
- $false: Social network ID sign in is not allowed. Whether the recipient can use a one-time passcode or their Microsoft 365 work or school account is controlled by the OTPEnabled parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
