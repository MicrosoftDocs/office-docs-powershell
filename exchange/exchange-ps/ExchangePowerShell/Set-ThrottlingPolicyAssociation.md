---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-throttlingpolicyassociation
schema: 2.0.0
title: Set-ThrottlingPolicyAssociation
---

# Set-ThrottlingPolicyAssociation

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ThrottlingPolicyAssociation cmdlet to associate a throttling policy with a specific object. The object can be a user with a mailbox, a user without a mailbox, a contact, or a computer account.

**Note**: Some parameters in the throttling policy (for example, MessageRateLimit) apply only to objects that have mailbox GUIDs (mailboxes or remote mailboxes) and don't apply to mail users. And, if you want to apply throttling policy to a remote mailbox, first populate the remote mailbox with an ExchangeGUID by using Set-RemoteMailbox -ExchangeGUID.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ThrottlingPolicyAssociation [-Identity] <ThrottlingPolicyAssociationIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-ThrottlingPolicyAssociation cmdlet defines quota limits for specific objects. For example, if you notice that a user or other object is using excessive bandwidth, you can associate that object with a throttling policy that's more restrictive.

In data center deployments, the object referred to by the Identity and ThrottlingPolicy parameters must be in the same tenant.

For more information about how to control the resources consumed by individual users, see [User workload management in Exchange Server](https://learn.microsoft.com/Exchange/server-health/workload-management).

You need to be assigned permissions before you can run the Set-ThrottlingPolicyAssociation cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ThrottlingPolicyAssociation -Identity tonysmith -ThrottlingPolicy ITStaffPolicy
```

This example associates a user with a username of tonysmith to the throttling policy ITStaffPolicy that has higher limits.

### Example 2
```powershell
$b = Get-ThrottlingPolicy ITStaffPolicy

Set-Mailbox -Identity tonysmith -ThrottlingPolicy $b
```

You don't need to use the Set-ThrottlingPolicyAssociation cmdlet to associate a user with a policy. The following commands show another way to associate tonysmith with the throttling policy ITStaffPolicy.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the object to which you want to associate a throttling policy. The object can be a user with a mailbox, a user without a mailbox, a contact, or a computer account.

```yaml
Type: ThrottlingPolicyAssociationIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottlingPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ThrottlingPolicy parameter specifies the throttling policy that you want the object specified by the Identity parameter to be associated with.

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
