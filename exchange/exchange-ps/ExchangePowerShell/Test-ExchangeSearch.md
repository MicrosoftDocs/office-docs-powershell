---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/test-exchangesearch
schema: 2.0.0
title: Test-ExchangeSearch
---

# Test-ExchangeSearch

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-ExchangeSearch cmdlet to test that Exchange Search is currently enabled and is indexing new email messages in a timely manner.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Test-ExchangeSearch [[-Identity] <MailboxIdParameter>]
 [-Archive]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IndexingTimeoutInSeconds <Int32>]
 [-MonitoringContext]
 [-WhatIf]
 [<CommonParameters>]
```

### Database
```
Test-ExchangeSearch [-MailboxDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IndexingTimeoutInSeconds <Int32>]
 [-MonitoringContext]
 [-WhatIf]
 [<CommonParameters>]
```

### Server
```
Test-ExchangeSearch [-Server <ServerIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IndexingTimeoutInSeconds <Int32>]
 [-MonitoringContext]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Test-ExchangeSearch cmdlet creates a hidden message and an attachment in the specified mailbox that's visible only to Exchange Search. The command waits for the message to be indexed and then searches for the content. It reports success or failure depending on whether the message is found after the interval set in the IndexingTimeoutInSeconds parameter has elapsed.

You can use the Verbose switch to get detailed information about each step performed by the cmdlet as part of the test.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Test-ExchangeSearch -Identity john@contoso.com
```

This example tests Exchange Search results for the mailbox database on which the specified mailbox resides.

### Example 2
```powershell
Test-ExchangeSearch -Identity john@contoso.com -Verbose
```

This example tests Exchange Search results for the mailbox database on which the specified mailbox resides. The Verbose switch is used to display detailed information.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the mailbox that you want to test Exchange Search against. You can use any value that uniquely identifies the mailbox. For example:

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

You can't use this parameter with the MailboxDatabase or Server parameters.

```yaml
Type: MailboxIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Archive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Archive switch specifies that the test is run against the archive mailbox for the mailbox user specified by the Identity parameter. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -IndexingTimeoutInSeconds

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The IndexingTimeoutInSeconds parameter specifies, in seconds, the maximum amount of time to wait between adding the new email message to the test mailbox and waiting for it to be returned in a search result. The default value is 120 seconds. If this parameter isn't specified, the default interval is used.

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

### -MailboxDatabase

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is functional only in Exchange Server 2010 and 2013.

The MailboxDatabase parameter specifies the mailbox database to test Exchange Search against. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity or Server parameters.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Database
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MonitoringContext

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MonitoringContext switch includes the associated monitoring events and performance counters in the results. You don't need to specify a value with this switch.

Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM).

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

### -Server

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Server parameter specifies the Exchange server for the recipient that you want to test Exchange Search against. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

You can't use this parameter with the MailboxDatabase or Identity parameters.

```yaml
Type: ServerIdParameter
Parameter Sets: Server
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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
