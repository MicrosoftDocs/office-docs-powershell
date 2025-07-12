---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-sweeprule
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Get-SweepRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-SweepRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-SweepRule cmdlet to view Sweep rules in mailboxes. Sweep rules run at regular intervals to help keep your Inbox clean.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SweepRule [[-Identity] <SweepRuleIdParameter>]
 [-BypassScopeCheck]
 [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>]
 [-Provider <String>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SweepRule
```

This example returns a summary list of all Sweep rules.

### Example 2
```powershell
Get-SweepRule -Mailbox julia@contoso.com
```

This example returns a summary list of all Sweep rules in the specified mailbox.

### Example 3
```powershell
Get-SweepRule -Identity "x2hlsdpGmUifjFgxxGIOJw=="
```

This example returns detailed information for the Sweep rule with the specified RuleId property value.

## PARAMETERS

### -Identity
The Identity parameter specifies the Sweep rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- RuleId property (for example, x2hlsdpGmUifjFgxxGIOJw==).
- Exchange Online: `MailboxAlias\RuleID` (for example, `rzaher\2hlsdpGmUifjFgxxGIOJw==`).
- On-premises Exchange: `MailboxCanonicalName\RuleID` (for example, `contoso.com/Users/Rick Zaher\x2hlsdpGmUifjFgxxGIOJw==`).

```yaml
Type: SweepRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BypassScopeCheck
The BypassScopeCheck switch specifies whether to bypass the scope check for the user that's running the command. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter filters the results by the specified mailbox. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Provider
The Provider parameter filters the results by the specified provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
This parameter is available only in the cloud-based service.

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipCount
This parameter is available only in the cloud-based service.

{{ Fill SkipCount Description }}

```yaml
Type: Int32
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
