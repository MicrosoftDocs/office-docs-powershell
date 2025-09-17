---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-omeconfiguration
schema: 2.0.0
title: Set-OMEConfiguration
---

# Set-OMEConfiguration

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-OMEConfiguration cmdlet to configure Microsoft Purview Message Encryption.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-OMEConfiguration [-Identity] <OMEConfigurationIdParameter>
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
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-OMEConfiguration -Identity "OME Configuration" -EmailText "Encrypted message enclosed." -PortalText "This portal is encrypted." -DisclaimerText "Encryption security disclaimer." -Image ([System.IO.File]::ReadAllBytes('C:\Temp\OME Logo.gif'))
```

This example configures the specified values for the default OME configuration named "OME Configuration".

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the OME configuration that you want to modify. The default OME configuration has the Identity value "OME Configuration".

```yaml
Type: OMEConfigurationIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BackgroundColor

> Applicable: Exchange Online, Exchange Online Protection

The BackgroundColor parameter specifies the background color. Valid values are:

- An HTML hexadecimal color code value (#RRGGBB) enclosed in quotation marks. For example, `"#FFFFFF"` is white.
- A valid color name value. For example, `yellow` is #ffff00. For a list of the valid color names, see [Background color reference](https://learn.microsoft.com/purview/add-your-organization-brand-to-encrypted-messages#background-color-reference).
- $null (blank). This value is the default.

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

> Applicable: Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

> Applicable: Exchange Online, Exchange Online Protection

The DisclaimerText parameter specifies the disclaimer text in the email that contains the encrypted message. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

To remove existing text and use the default value, use the value $null for this parameter.

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

> Applicable: Exchange Online, Exchange Online Protection

The EmailText parameter specifies the default text that accompanies encrypted email messages. The default text appears above the instructions for viewing encrypted messages. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

To remove existing text and use the default value, use the value $null for this parameter.

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

The ExternalMailExpiryInDays parameter specifies the number of days that the encrypted message is available to external recipients in the Microsoft 365 portal. A valid value is an integer from 0 to 730. The value 0 means the messages never expire. The default value is 0.

You can't update the value of this parameter in the default OME configuration. You can only modify this value in a customized configuration.

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

> Applicable: Exchange Online, Exchange Online Protection

The Image parameter identifies and uploads an image to be displayed in the email message and in the Microsoft 365 admin center.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

- Supported file formats: .png, .jpg, .bmp, or .tiff
- Optimal size of logo file: less than 40 KB
- Optimal dimensions of logo image: 170x70 pixels

To remove an existing image and use the default image, use the value $null for this parameter.

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

> Applicable: Exchange Online, Exchange Online Protection

The IntroductionText parameter specifies the text that appears next to the sender's name and email address. If the value contains spaces, enclose the value in quotation marks (").

To remove existing text and use the default value, use the value $null for this parameter.

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

> Applicable: Exchange Online, Exchange Online Protection

The OTPEnabled parameter specifies whether to allow recipients to use a one-time passcode to view encrypted messages. Valid values are:

- $true: Recipients can use a one-time passcode to view encrypted messages. This value is the default.
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

> Applicable: Exchange Online, Exchange Online Protection

The PortalText parameter specifies the text that appears at the top of the encrypted mail viewing portal. The maximum length is 128 characters. If the value contains spaces, enclose the value in quotation marks (").

To remove existing text and use the default value, use the value $null for this parameter.

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

> Applicable: Exchange Online, Exchange Online Protection

The PrivacyStatementUrl parameter specifies the Privacy Statement link in the encrypted email notification message.

If you don't use this parameter, the Privacy Statement link goes to the default Microsoft privacy statement.

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

> Applicable: Exchange Online, Exchange Online Protection

The ReadButtonText parameter specifies the text that appears on the "Read the message" button. If the value contains spaces, enclose the value in quotation marks (").

To remove existing text and use the default value, use the value $null for this parameter.

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

> Applicable: Exchange Online, Exchange Online Protection

The SocialIdSignIn parameter specifies whether a user is allowed to view an encrypted message in the Microsoft 365 admin center using their own social network id (Google, Yahoo, and Microsoft account). Valid values are:

- $true: Social network ID sign in is allowed. This value is the default.
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

> Applicable: Exchange Online, Exchange Online Protection

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
