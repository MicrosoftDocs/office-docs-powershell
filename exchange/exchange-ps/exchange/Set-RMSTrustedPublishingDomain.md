---
applicable: Exchange Online
schema: 2.0.0
---

# Set-RMSTrustedPublishingDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-RMSTrustedPublishingDomain cmdlet to configure a trusted publishing domain (TPD) in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-RMSTrustedPublishingDomain [-Identity] <RmsTrustedPublishingDomainIdParameter> [-Confirm] [-Default]
 [-DomainController <Fqdn>] [-ExtranetCertificationUrl <Uri>] [-ExtranetLicensingUrl <Uri>]
 [-IntranetCertificationUrl <Uri>] [-IntranetLicensingUrl <Uri>] [-Name <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
A TPD contains the settings needed to use RMS features in your organization. For example, users can apply RMS templates to email messages.

## EXAMPLES

### Example 1 -------------------------- (Exchange Online)
```
Set-RMSTrustedPublishingDomain "Contoso TPD" -Default -ExtranetLicensingUrl https://rms.contoso.com/_wmcs/licensing -ExtranetCertificationUrl https://rms.contoso.com/_wmcs/certification/servercertification.asmx
```

This example makes the following changes to the existing TPD Contoso TPD:


Sets Contoso TPD as the default TPD for the organization.

Sets the external licensing URL to https://rms.contoso.com/\_wmcs/licensing.

Sets the external certification URL to https://rms.contoso.com/\_wmcs/certification/servercertification.asmx

## PARAMETERS

### -Identity
The Identity parameter specifies the TPD. You can use any value that uniquely identifies the TPD, for example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: RmsTrustedPublishingDomainIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Default
The Default parameter specifies this is the default TPD. The default TPD displays RMS templates and provides rights protection to all new content. There can be only one default TPD in an organization.

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

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
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
The ExtranetCertificationUrl parameter specifies the external certification URL of the on-premises AD RMS server that's stamped into the Rights Account Certificate (RAC). The RAC establishes a user's identity in the AD RMS system and is used to decrypt content.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtranetLicensingUrl
The ExtranetLicensingUrl parameter specifies the external licensing URL of the on-premises AD RMS server that's stamped into the publishing license. The publishing license specifies the users that can open the rights-protected content, under which conditions the content may be opened by the user, and the rights that each user will have to the rights-protected content.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IntranetCertificationUrl
The IntranetCertificationUrl parameter specifies the internal certification URL of the on-premises AD RMS server that's stamped into the RAC. The RAC establishes a user's identity in the AD RMS system and is used to decrypt content.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IntranetLicensingUrl
The IntranetLicensingUrl parameter specifies the internal licensing URL of the on-premises AD RMS server that's stamped into the publishing license. The publishing license specifies the users that can open the rights-protected content, under which conditions the content may be opened by the user, and the rights that each user will have to the rights-protected content.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the TPD.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

[Online Version](https://technet.microsoft.com/library/89af98c7-b6cb-4aa5-8ffa-d438579b7aa2.aspx)

