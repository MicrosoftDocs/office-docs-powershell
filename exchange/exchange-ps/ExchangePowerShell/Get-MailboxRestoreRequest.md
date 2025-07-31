---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailboxrestorerequest
schema: 2.0.0
title: Get-MailboxRestoreRequest
---

# Get-MailboxRestoreRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxRestoreRequest cmdlet to view detailed status of an ongoing restore request that was initiated by using the New-MailboxRestoreRequest cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-MailboxRestoreRequest [[-Identity] <MailboxRestoreRequestIdParameter>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Filtering
```
Get-MailboxRestoreRequest [-BatchName <String>]
 [-HighPriority <Boolean>]
 [-Name <String>]
 [-RequestQueue <DatabaseIdParameter>]
 [-SourceDatabase <DatabaseIdParameter>]
 [-Status <RequestStatus>]
 [-Suspend <Boolean>]
 [-TargetDatabase <DatabaseIdParameter>]
 [-TargetMailbox <MailboxOrMailUserIdParameter>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxRestoreRequest -Identity "Ayla\MailboxRestore"
```

This example returns the status of the in-progress and queued restore request with the identity ayla\\MailboxRestore, where Ayla is the first name of the user.

### Example 2
```powershell
Get-MailboxRestoreRequest -TargetDatabase MBD01
```

In Exchange Server 2010, this example returns the status of in progress and queued restore requests that are being restored to the target database MBD01.

### Example 3
```powershell
Get-MailboxRestoreRequest -RequestQueue MBD01
```

This example returns the status of in-progress and queued restore requests that are being restored to the mailbox database MBD01.

### Example 4
```powershell
Get-MailboxRestoreRequest -Name "RestoreToMBD01" -Suspend $true
```

This example returns all restore requests that have the name RestoreToMBD01 where the restore request has been suspended.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the identity of the restore request. The Identity parameter consists of the alias of the mailbox to be restored and the name that was specified when the restore request was created. The identity of the restore request uses the following syntax: `Alias\Name`.

If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

You can't use this parameter with the Name parameter.

```yaml
Type: MailboxRestoreRequestIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BatchName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The BatchName parameter specifies the name given to a batch of restore requests.

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Filtering
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

### -HighPriority

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The HighPriority parameter filters the results based on the Priority value that was assigned when the request was created. Valid input for this parameter is $true or $false. Here's how these values filter the results:

- $true Returns requests that were created with the Priority value High, Higher, Highest or Emergency.
- $false Returns requests that were created with the Priority value Normal, Low, Lower or Lowest.

You can't use this parameter with the Identity parameter.

```yaml
Type: Boolean
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies that any restore request that has the specified name is returned.

Use this parameter to search on the name you provided when you created the restore request.

If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

### -SourceDatabase

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The SourceDatabase parameter specifies that the cmdlet should only return restore requests for mailboxes that are being restored from the specified source database. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Status parameter filters the results based on status. You can use the following values:

- AutoSuspended
- Completed
- CompletedWithWarning
- CompletionInProgress
- Failed
- InProgress
- Queued
- Retrying
- Suspended
- Synced

You can't use this parameter with the Identity parameter.

```yaml
Type: RequestStatus
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Suspend parameter specifies whether to return requests that have been suspended. Valid input for this parameter is $true or $false.

You can't use this parameter with the Identity parameter.

```yaml
Type: Boolean
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDatabase

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The TargetDatabase parameter specifies that the cmdlet should only return restore requests for mailboxes that reside on the target database. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Filtering
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetMailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The TargetMailbox parameter specifies the identity of the target mailbox. You can use the following values:

- GUID
- Distinguished name (DN)
- Domain\\Account
- User principal name (UPN)
- Legacy Exchange DN
- SMTP address
- Alias

You can't use this parameter with the Identity parameter.

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: Filtering
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
