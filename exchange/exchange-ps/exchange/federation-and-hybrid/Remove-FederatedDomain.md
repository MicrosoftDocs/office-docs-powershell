---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Remove-FederatedDomain
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Remove-FederatedDomain

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-FederatedDomain cmdlet to remove a federated domain from the federated organization identifier in the federation trust for the Exchange organization.

If you remove a domain configured for federated sharing, federated sharing for that domain is disabled.

For more information, see Federation (https://technet.microsoft.com/library/dd335047.aspx).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-FederatedDomain [[-Identity] <OrganizationIdParameter>] -DomainName <SmtpDomain> [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
An Exchange organization's federated organization identifier is generally created using the organization's primary domain name. Additional domain names can be added and removed. The Remove-FederatedDomain cmdlet removes a federated domain from the federated organization identifier.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-FederatedDomain -DomainName contoso.co.uk
```

This example removes the federated domain contoso.co.uk from the federated organization identifier.

## PARAMETERS

### -DomainName
The DomainName parameter specifies the federated domain name to be removed from the federated organization identifier.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages when removing a federated domain. This parameter can be used when the removal of the federated domain from Windows Live fails, but the configuration of this domain as a federated domain in Exchange should be removed regardless. The result of running this task with the Force switch is that the Exchange configuration is removed but the domain may not be released in Windows Live. We recommend that you not use the Force switch unless the release of the domain from Windows Live continues to fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/8cd3096e-79ca-4af8-bfb2-48bb8cee5208.aspx)
