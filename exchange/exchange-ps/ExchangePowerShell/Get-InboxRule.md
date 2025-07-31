---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-inboxrule
schema: 2.0.0
title: Get-InboxRule
---

# Get-InboxRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-InboxRule cmdlet to view Inbox rule properties. Inbox rules are used to process messages in the Inbox based on conditions specified and take actions such as moving a message to a specified folder or deleting a message.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-InboxRule [[-Identity] <InboxRuleIdParameter>]
 [-BypassScopeCheck]
 [-DescriptionTimeFormat <String>]
 [-DescriptionTimeZone <ExTimeZoneValue>]
 [-DomainController <Fqdn>]
 [-IncludeHidden]
 [-Mailbox <MailboxIdParameter>]
 [-ResultSize <Unlimited>]
 [-SkipCount <Int32>]
 [-SweepRules]
 [-UseCustomRouting]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

**Note**: This cmdlet doesn't work for members of View-Only Organization Management role group in Exchange Online or the Global Reader role in Microsoft Entra ID.

## EXAMPLES

### Example 1
```powershell
Get-InboxRule -Mailbox Joe@Contoso.com
```

This example retrieves all Inbox rules for the mailbox Joe@Contoso.com.

### Example 2
```powershell
Get-InboxRule "ReceivedLastYear" -Mailbox joe@contoso.com -DescriptionTimeFormat "MM/dd/yyyy" -DescriptionTimeZone "Pacific Standard Time"
```

This example retrieves the Inbox rule ReceivedLastYear from the mailbox joe@contoso.com on which the ReceivedBeforeDate parameter was set when the rule was created. The DescriptionTimeFormat and DescriptionTimeZone parameters are used in this example to specify formatting of the time and the time zone used in the rule's Description property.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the Inbox rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- RuleIdentity property (for example, 16752869479666417665).
- Exchange Online: `MailboxAlias\RuleIdentity` (for example, `rzaher\16752869479666417665`).
- On-premises Exchange: `MailboxCanonicalName\RuleIdentity` (for example, `contoso.com/Users/Rick Zaher\16752869479666417665`).

```yaml
Type: InboxRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BypassScopeCheck

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The BypassScopeCheck switch specifies whether to bypass the scope check for the user that's running the command. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DescriptionTimeFormat

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DescriptionTimeFormat parameter specifies the format for time values in the rule description. For example:

MM/dd/yyyy, where MM is the 2-digit month, dd is the 2-digit day and yyyy is the 4-digit year.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DescriptionTimeZone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DescriptionTimeZone parameter specifies time zone that's used for time values in the rule description.

A valid value for this parameter is a supported time zone key name (for example, "Pacific Standard Time").

To see the available values, run the following command: `$TimeZone = Get-ChildItem "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Time zones" | foreach {Get-ItemProperty $_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display`.

If the value contains spaces, enclose the value in quotation marks ("). The default value is the time zone setting of the Exchange server.

```yaml
Type: ExTimeZoneValue
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -IncludeHidden

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The IncludeHidden switch specifies whether to include hidden Inbox rules in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Mailbox parameter specifies the mailbox that contains the Inbox rule. You can use any value that uniquely identifies the mailbox. For example:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipCount

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SkipCount Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SweepRules

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The SweepRules switch specifies whether to return only Sweep rules in the results. You don't need to specify a value with this switch.

Sweep rules run at regular intervals to help keep your Inbox clean.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseCustomRouting

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill UseCustomRouting Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

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
