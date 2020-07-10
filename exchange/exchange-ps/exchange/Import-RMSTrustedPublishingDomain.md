---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/import-rmstrustedpublishingdomain
applicable: Exchange Online
title: Import-RMSTrustedPublishingDomain
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Import-RMSTrustedPublishingDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Import-RMSTrustedPublishingDomain cmdlet to import a trusted publishing domain (TPD) from an on-premises server running Active Directory Rights Management Services (AD RMS) or from RMS Online into your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### IntranetLicensingUrl
```
Import-RMSTrustedPublishingDomain [-Name] <String> -ExtranetLicensingUrl <Uri> -FileData <Byte[]> -IntranetLicensingUrl <Uri> -Password <SecureString>
 [-Confirm]
 [-Default]
 [-WhatIf] [<CommonParameters>]
```

### ImportFromFile
```
Import-RMSTrustedPublishingDomain [-Name] <String> -ExtranetLicensingUrl <Uri> -FileData <Byte[]> -IntranetLicensingUrl <Uri> -Password <SecureString> [-ExtranetCertificationUrl <Uri>] [-IntranetCertificationUrl <Uri>]
 [-Confirm]
 [-Default]
 [-WhatIf] [<CommonParameters>]
```

### RefreshTemplates
```
Import-RMSTrustedPublishingDomain [-Name] <String> -FileData <Byte[]> -Password <SecureString> [-RefreshTemplates]
 [-Confirm]
 [-Default]
 [-WhatIf] [<CommonParameters>]
```

### RMSOnline
```
Import-RMSTrustedPublishingDomain [-Name] <String> [-RMSOnline] [-RefreshTemplates]
 [-Confirm]
 [-Default]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
A TPD contains the settings needed to use RMS features in your organization. For example, users can apply RMS templates to email messages. After you export the TPD from an on-premises AD RMS server to an XML file, you can import the XML file into your cloud-based organization.

If the InternalLicensingEnabled parameter value is $true on the Set-IRMConfiguration cmdlet, all TPDs require a private key. If the InternalLicensingEnabled parameter value is $false, TPDs don't require a private key. However, the only RMS feature available to the organization is Outlook protection rules. Typically, TPDs without private keys are created when the AD RMS server uses a hardware-based cryptographic service provider (CSP) or a custom CSP.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Import-RMSTrustedPublishingDomain -Name "Contoso TPD" -FileData $([byte[]](Get-Content -Encoding byte -Path "C:\My Documents\Contoso.xml" -ReadCount 0)) -Password (ConvertTo-SecureString -String 'Pa$$word1' -AstPlainText -Force)-ExtranetLicensingUrl https://rms.contoso.com/_wmcs/licensing -IntranetLicensingUrl https://RMS01/_wmcs/licensing
```

This example imports a TPD from an AD RMS server into a cloud-based organization. The TPD uses the following values:

- Path to exported XML file: C:\\My Documents\\Contoso.xml

- Password of exported XML file: Pa$$word1

- External licensing URL: https://rms.contoso.com/\_wmcs/licensing

- Internal licensing URL: https://RMS01/\_wmcs/licensing

- TPD name: Contoso TPD

## PARAMETERS

### -ExtranetLicensingUrl
The ExtranetLicensingUrl parameter specifies the external licensing URL of the on-premises AD RMS server that's stamped into the publishing license. The publishing license specifies the users that can open the rights-protected content, under which conditions the content may be opened by the user, and the rights that each user will have to the rights-protected content.

By default, the value of the ExtranetLicensingUrl parameter is https://\<FQDN\>/\_wmcs/licensing.

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
The FileData parameter specifies the XML file you want to import. The XML file contains the TPD you exported from the on-premises AD RMS server.

A valid value for this parameter requires you to read the file to a byte-encoded object using the Get-Content cmdlet. For example, \(\[Byte\[\]\]\(Get-Content -Encoding Byte -Path "C:\\My Documents\\\<filename\>" -ReadCount 0\)\).

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
The IntranetLicensingUrl parameter specifies the internal licensing URL of the on-premises AD RMS server that's stamped into the publishing license. The publishing license specifies the users that can open the rights-protected content, under which conditions the content may be opened by the user, and the rights that each user will have to the rights-protected content.

By default, the value of the IntranetLicensingUrl parameter is https://\<server name\>/\_wmcs/licensing.

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

### -Name
The Name parameter specifies the name of the TPD. If you use the RefreshTemplates switch, the value must match the name of the previously imported TPD.

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

### -Password
The Password parameter specifies the password of the TPD that you want to import. The password value must match the password in the XML file when you exported the TPD from the on-premises AD RMS server.

This parameter uses the syntax `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`. Or, before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable name (`$password`) for this parameter.

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
The RMSOnline switch specifies that the TPD is imported from RMS Online. You don't need to specify a value with this switch.

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
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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
The Default switch specifies that this is the default TPD. You don't need to specify a value with this switch.

The default TPD displays RMS templates and provides rights protection to all new content. There can be only one default TPD in an organization.

The first TPD you import into your organization is automatically set as the default.

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
The ExtranetCertificationUrl parameter specifies the external certification URL of the on-premises AD RMS server that's stamped into the Rights Account Certificate (RAC). The RAC establishes a user's identity in the AD RMS system, and is used to decrypt content.

By default, the value of the ExtranetCertificationUrl parameter is https://\<FQDN\>/\_wmcs/certification/servercertification.asmx.

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
The IntranetCertificationUrl parameter specifies the internal certification URL of the on-premises AD RMS server that's stamped into the RAC. The RAC establishes a user's identity in the AD RMS system, and is used to decrypt content.

By default, the value of the IntranetCertificationUrl parameter is https://\<server name\>/\_wmcs/certification/servercertification.asmx.

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
The RefreshTemplates switch specifies whether to update the RMS templates in a previously imported TPD. You don't need to specify a value with this switch.

When you add, modify, or remove RMS templates in a TPD on the AD RMS server, you export the updated TPD to a new XML file, and import the new XML file in your cloud-based organization. The RefreshTemplates switch uses the following rules:

- Only the FileData, Password, and Name parameters are required. The value of the Name parameter must match the name of the previously imported TPD.

- If the new XML file doesn't contain an RMS template that was defined in the previously imported TPD, the RMS template is removed from the cloud-based organization.

- If the new XML file contains an updated RMS template that was defined in the previously imported TPD, the RMS template settings are updated in the cloud-based organization. However, the RMS template isn't changed from Archived to Distributed or vice versa.

- If the new XML file contains an RMS template that wasn't imported in the original TPD, the RMS template is added to the cloud-based organization in the Archived state. To make the new RMS template usable, you must change its state from Archived to Distributed using the Set-RMSTemplate cmdlet.

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
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
