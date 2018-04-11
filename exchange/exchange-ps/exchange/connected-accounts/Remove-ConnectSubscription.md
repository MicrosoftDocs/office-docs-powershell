---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Online
title: Remove-ConnectSubscription
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Remove-ConnectSubscription

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-ConnectSubscription cmdlet to remove a previously configured contact aggregation subscription between a supported service (for example, Facebook or LinkedIn) and a cloud-based mailbox. An administrator can't use this cmdlet to remove subscriptions from another user's mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-ConnectSubscription [-Identity] <AggregationSubscriptionIdParameter> [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
When you remove a contact aggregation subscription, all contacts from the supported services are removed from Outlook on the web. You can't delete a mailbox that has a subscription with a contact aggregation provider until the subscription is removed. If you try to delete a mailbox that has a subscription with a contact aggregation provider, an error message is displayed that the contact subscription must be removed before the mailbox can be deleted.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-ConnectSubscription -Identity <Aggregation subscription identity>
```

This example removes the all previously configured contact aggregation subscriptions and removes all contacts that were aggregated from the previously configured contact aggregation subscription from Outlook on the web. You can find the subscription identity by using the Get-ConnectSubscription cmdlet.

## PARAMETERS

### -Identity
The Identity parameter specifies the GUID of the contact aggregation subscription you want to remove. You can find the subscription identity by using the Get-ConnectSubscription cmdlet.

```yaml
Type: AggregationSubscriptionIdParameter
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
Aliases: cf
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

[Online Version](https://technet.microsoft.com/library/6a4e7267-e3e9-42ec-b1be-7d1d9e2ea40c.aspx)
