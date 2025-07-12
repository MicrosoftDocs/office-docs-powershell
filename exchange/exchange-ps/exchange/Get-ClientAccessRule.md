---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-clientaccessrule
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Get-ClientAccessRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-ClientAccessRule

## SYNOPSIS
> [!NOTE]
> Beginning in October 2022, client access rules were deprecated for all Exchange Online organizations that weren't using them. Client access rules will be deprecated for all remaining organizations on September 1, 2025. If you choose to turn off client access rules before the deadline, the feature will be disabled in your organization. For more information, see [Update on Client Access Rules Deprecation in Exchange Online](https://techcommunity.microsoft.com/blog/exchange/update-on-client-access-rules-deprecation-in-exchange-online/4354809).

This cmdlet is functional only in Exchange Server 2019 and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ClientAccessRule cmdlet to view client access rules. Client access rules help you control access to your cloud-based organization based on the properties of the connection.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ClientAccessRule [[-Identity] <ClientAccessRuleIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Client access rules are like mail flow rules (also known as transport rules) for client connections to your organization. You use conditions and exceptions to identify the connections based on their properties, and actions that allow or block the connections.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ClientAccessRule
```

This example shows a summary list of all client access rules.

### Example 2
```powershell
Get-ClientAccessRule "Block Client Connections from 192.168.1.0/24" | Format-List
```

This example retrieves details about the client access rule named "Block Client Connections from 192.168.1.0/24".

## PARAMETERS

### -Identity
The Identity parameter specifies the client access rule that you want to view. You can use any value that uniquely identifies the client access rule. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ClientAccessRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is functional only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
