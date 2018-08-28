---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Test-ExchangeSearch
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Test-ExchangeSearch

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-ExchangeSearch cmdlet to test that Exchange Search is currently enabled and is indexing new email messages in a timely manner.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Test-ExchangeSearch [[-Identity] <MailboxIdParameter>] [-Archive] [-Confirm] [-DomainController <Fqdn>]
 [-IndexingTimeoutInSeconds <Int32>] [-MonitoringContext] [-WhatIf] [<CommonParameters>]
```

### Set3
```
Test-ExchangeSearch [-Confirm] [-DomainController <Fqdn>] [-IndexingTimeoutInSeconds <Int32>]
 [-MailboxDatabase <DatabaseIdParameter>] [-MonitoringContext] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Test-ExchangeSearch [-Confirm] [-DomainController <Fqdn>] [-IndexingTimeoutInSeconds <Int32>]
 [-MonitoringContext] [-Server <ServerIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Test-ExchangeSearch cmdlet creates a hidden message and an attachment in the specified mailbox that's visible only to Exchange Search. The command waits for the message to be indexed and then searches for the content. It reports success or failure depending on whether the message is found after the interval set in the IndexingTimeoutInSeconds parameter has elapsed.

You can use the Verbose switch to get detailed information about each step performed by the cmdlet as part of the test.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-ExchangeSearch -Identity john@contoso.com
```

This example tests Exchange Search results for the mailbox database on which the specified mailbox resides.

### -------------------------- Example 2 --------------------------
```
Test-ExchangeSearch -Identity john@contoso.com -Verbose
```

This example tests Exchange Search results for the mailbox database on which the specified mailbox resides. The Verbose switch is used to display detailed information.

## PARAMETERS

### -Archive
The Archive switch specifies that the test be run against the archive mailbox for the mailbox user specified in the Identity parameter. When the Archive switch is used, you must also use the Identity parameter to specify the mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -Identity
The Identity parameter specifies the mailbox that you want to test Exchange Search against.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IndexingTimeoutInSeconds
The IndexingTimeoutInSeconds parameter specifies, in seconds, the maximum amount of time to wait between adding the new email message to the test mailbox and waiting for it to be returned in a search result. The default value is 120 seconds. If this parameter isn't specified, the default interval is used.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxDatabase
This parameter is available or functional only in Exchange Server 2010 and 2013.

The MailboxDatabase parameter specifies the mailbox database to test Exchange Search against. The MailboxDatabase and Identity parameters can't be used together.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MonitoringContext
The MonitoringContext switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM). You don't need to specify a value with this switch.

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

### -Server
This parameter is available or functional only in Exchange Server 2010 and 2013.

The Server parameter specifies the Exchange server for the recipient that you want to test Exchange Search against.

```yaml
Type: ServerIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
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

[Online Version](https://technet.microsoft.com/library/d50b8f0b-7b79-45d5-b1a4-8a5bc84d0724.aspx)
