---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Online
title: Set-OMEConfiguration
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Set-OMEConfiguration

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-OMEConfiguration cmdlet to configure Microsoft Office 365 Message Encryption (OME).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-OMEConfiguration [-Identity] <OMEConfigurationIdParameter> [-BackgroundColor <String>] [-ClientEncryptionEnabled <$true | $false>]
 [-DisclaimerText <String>] [-EmailText <String>] [-ExpirationOptionEnabled <$true | $false>] [-Image <Byte[]>] [-IntroductionText <String>] [-OTPEnabled <$true | $false>] [-PortalText <String>] [-ReadButtonText <String>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-OMEConfiguration -Identity "OME Configuration" -EmailText "Encrypted message enclosed." -PortalText "This portal is encrypted." -DisclaimerText "Encryption security disclaimer." -Image (Get-Content "C:\Temp\OME Logo.gif" -Encoding byte)
```

This example uses the Set-OMEConfiguration cmdlet to set all the parameters. Note the use of the Get-Content command to provide the input for the Image parameter.

## PARAMETERS

### -Identity
The Identity parameter specifies the OME configuration that you want to modify. The default OME configuration has the Identity value "OME Configuration". You can also use "default".

```yaml
Type: OMEConfigurationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BackgroundColor
The BackgroundColor parameter specifies the background color. Valid values are:

- An available HTML hexadecimal \(hex triplet\) color code value \(for example, 0x000000 is white\).

- An available text value \(for example, yellow is 0x00FFFF00\).

- $null \(blank\). This is the default value.

For the list of available hex and text values, see Background colors for Office 365 Message Encryption (https://support.office.com/article/1508cb35-c5ff-4523-b579-947b21d5515f). 

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

### -ClientEncryptionEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
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
The DisclaimerText parameter specifies the disclaimer text in the email that contains the encrypted message. The maximum length is 1024 characters.

To remove existing text and use the default value, use the value $null for this parameter.

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
The EmailText parameter specifies the default text that accompanies encrypted email messages. The default text appears above the instructions for viewing encrypted messages. The maximum length is 1024 characters.

To remove existing text and use the default value, use the value $null for this parameter.

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

### -ExpirationOptionEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
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

To remove an existing image and use the default image, use the value $null for this parameter.

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
Type: $true | $false
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
The PortalText parameter specifies the text that appears at the top of the encrypted mail viewing portal. The maximum length is 128 characters.

To remove existing text and use the default value, use the value $null for this parameter.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/3ef0aec0-ce28-411d-abe8-7236f082af1b.aspx)
