---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/start-mailboxassistant
applicable: Exchange Server 2019
title: Start-MailboxAssistant
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---
# Start-MailboxAssistant

## SYNOPSIS
This cmdlet is available only in Exchange Server 2019 in Cumulative Update 11 (CU11) or later.

Use the Start-MailboxAssistant cmdlet to start processing of a mailbox by the specified assistant.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Start-MailboxAssistant [-Identity] <UserIdParameter> -AssistantName <String>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Parameters <String>]
 [-SoftDeletedMailbox]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Start-MailboxAssistant -Identity "Chris" -AssistantName BigFunnelRetryFeederTimeBasedAssistant
```

This example starts the `BigFunnelRetryFeederTimeBasedAssistant` assistant and lets it process the mailbox of the user "Chris". The assistant indexes the mailbox items that were not indexed previously.

**Note**: You first need to create a setting override as described in [Incomplete search results after installing an Exchange Server 2019 update](https://support.microsoft.com/topic/incomplete-search-results-after-installing-an-exchange-server-2019-update-96ae2ef0-4569-4327-8d0c-8a3c1abdc1f6).

## PARAMETERS

### -Identity
The Identity parameter specifies the user whose mailbox should be processed by the Mailbox Assistant. Valid values are:

- Distinguished name (DN)
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AssistantName
The AssistantName parameter specifies the assistant that should process the mailbox. Valid values are:

- BigFunnelRetryFeederTimeBasedAssistant

Values are case sensitive.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: Exchange Server 2019

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
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parameters
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SoftDeletedMailbox
The SoftDeletedMailbox switch specifies that the mailbox to be processed by the assistant is a soft-deleted mailbox.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

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
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
