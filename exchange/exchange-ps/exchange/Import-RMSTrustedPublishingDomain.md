---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/import-rmstrustedpublishingdomain
applicable: Exchange Online
title: Import-RMSTrustedPublishingDomain
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Import-RMSTrustedPublishingDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**Note**: This cmdlet has been deprecated and is no longer used.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### IntranetLicensingUrl
```
Import-RMSTrustedPublishingDomain [-Name] <String> -ExtranetLicensingUrl <Uri> -FileData <Byte[]> -IntranetLicensingUrl <Uri> -Password <SecureString>
 [-Confirm]
 [-Default]
 [-WhatIf]
 [<CommonParameters>]
```

### ImportFromFile
```
Import-RMSTrustedPublishingDomain [-Name] <String> -ExtranetLicensingUrl <Uri> -FileData <Byte[]> -IntranetLicensingUrl <Uri> -Password <SecureString>
 [-ExtranetCertificationUrl <Uri>]
 [-IntranetCertificationUrl <Uri>]
 [-Confirm]
 [-Default]
 [-WhatIf]
 [<CommonParameters>]
```

### RefreshTemplates
```
Import-RMSTrustedPublishingDomain [-Name] <String> -FileData <Byte[]> -Password <SecureString>
 [-RefreshTemplates]
 [-Confirm]
 [-Default]
 [-WhatIf]
 [<CommonParameters>]
```

### RMSOnline
```
Import-RMSTrustedPublishingDomain [-Name] <String>
 [-RMSOnline]
 [-RefreshTemplates]
 [-Confirm]
 [-Default]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet has been deprecated and is no longer used.

## EXAMPLES

### Example 1
```powershell
Import-RMSTrustedPublishingDomain
```

This cmdlet has been deprecated and is no longer used.

## PARAMETERS

### -Name
This cmdlet has been deprecated and is no longer used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtranetLicensingUrl
This cmdlet has been deprecated and is no longer used.

```yaml
Type: Uri
Parameter Sets: IntranetLicensingUrl, ImportFromFile
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileData
This cmdlet has been deprecated and is no longer used.

```yaml
Type: Byte[]
Parameter Sets: IntranetLicensingUrl, ImportFromFile, RefreshTemplates
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IntranetLicensingUrl
This cmdlet has been deprecated and is no longer used.

```yaml
Type: Uri
Parameter Sets: IntranetLicensingUrl, ImportFromFile
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
This cmdlet has been deprecated and is no longer used.

```yaml
Type: SecureString
Parameter Sets: IntranetLicensingUrl, ImportFromFile, RefreshTemplates
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RMSOnline
This cmdlet has been deprecated and is no longer used.

```yaml
Type: SwitchParameter
Parameter Sets: RMSOnline
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
This cmdlet has been deprecated and is no longer used.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Default
This cmdlet has been deprecated and is no longer used.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtranetCertificationUrl
This cmdlet has been deprecated and is no longer used.

```yaml
Type: Uri
Parameter Sets: ImportFromFile
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IntranetCertificationUrl
This cmdlet has been deprecated and is no longer used.

```yaml
Type: Uri
Parameter Sets: ImportFromFile
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshTemplates
This cmdlet has been deprecated and is no longer used.

```yaml
Type: SwitchParameter
Parameter Sets: RefreshTemplates, RMSOnline
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
This cmdlet has been deprecated and is no longer used.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
