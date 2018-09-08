---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Online
title: Remove-RMSTrustedPublishingDomain
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Remove-RMSTrustedPublishingDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-RMSTrustedPublishingDomain cmdlet to remove an existing trusted publishing domain (TPD) from your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-RMSTrustedPublishingDomain [-Identity] <RmsTrustedPublishingDomainIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
A trusted publishing domain contains the settings needed to use Rights Management Services (RMS) features in your organization. When you delete a trusted publishing domain, all existing content that's protected by the RMS templates in the trusted publishing domain becomes unreadable. Instead of deleting the trusted publishing domain, you can archive the RMS templates using the Set-RMSTemplate cmdlet. Archiving the RMS template prevents future use for encryption, but allows access to existing rights-protected content.

If you delete the only trusted publishing domain, all RMS features are disabled in the organization. If multiple trusted publishing domains exist in your organization, you can't delete the default trusted publishing domain. You must first designate another trusted publishing domain as the default. You can change the default trusted publishing domain using the Set-RMSTrustedPublishingDomain cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-RMSTrustedPublishingDomain "Contoso TPD"
```

This example removes the trusted publishing domain Contoso TPD from your organization.

## PARAMETERS

### -Identity
The Identity parameter specifies the trusted publishing domain. You can use any value that uniquely identifies the trusted publishing domain, for example:

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

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Force
The Force parameter forces the command to execute without asking for user confirmation.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/778b4b91-0079-462b-b58d-3b3507ed8f69.aspx)
