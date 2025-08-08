---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-queue
schema: 2.0.0
title: Get-Queue
---

# Get-Queue

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-Queue cmdlet to view configuration information for queues on Mailbox servers or Edge Transport servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-Queue [[-Identity] <QueueIdentity>]
 [-BookmarkIndex <Int32>]
 [-BookmarkObject <ExtensibleQueueInfo>]
 [-Exclude <QueueViewerIncludesAndExcludes>]
 [-Include <QueueViewerIncludesAndExcludes>]
 [-IncludeBookmark <Boolean>]
 [-ResultSize <Unlimited>]
 [-ReturnPageInfo <Boolean>]
 [-SearchForward <Boolean>]
 [-SortOrder <QueueViewerSortOrderEntry[]>]
 [<CommonParameters>]
```

### Server
```
Get-Queue [-Server <ServerIdParameter>]
 [-Filter <String>]
 [-BookmarkIndex <Int32>]
 [-BookmarkObject <ExtensibleQueueInfo>]
 [-Exclude <QueueViewerIncludesAndExcludes>]
 [-Include <QueueViewerIncludesAndExcludes>]
 [-IncludeBookmark <Boolean>]
 [-ResultSize <Unlimited>]
 [-ReturnPageInfo <Boolean>]
 [-SearchForward <Boolean>]
 [-SortOrder <QueueViewerSortOrderEntry[]>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-Queue | Format-List
```

This example displays detailed information for all queues on the Mailbox server on which the command is run.

### Example 2
```powershell
Get-Queue -Filter "MessageCount -gt 100"
```

This example lists the queues that contain more than 100 messages.

### Example 3
```powershell
Get-Queue Server1\contoso.com | Format-List
```

This example displays detailed information for a specific queue that exists on the Mailbox server named Server1.

### Example 4
```powershell
Get-Queue -Exclude Internal
```

This example lists only the external queues.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter specifies the queue. Valid input for this parameter uses the syntax Server\\Queue or Queue, for example, Mailbox01\\contoso.com or Unreachable. For details about queue identity, see [Queue identity](https://learn.microsoft.com/Exchange/mail-flow/queues/queues-and-messages-in-powershell#queue-identity).

```yaml
Type: QueueIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BookmarkIndex

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The BookmarkIndex parameter specifies the position in the result set where the displayed results start. The value of this parameter is a 1-based index in the total result set. The BookmarkIndex parameter can't be used with the BookmarkObject parameter.

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

### -BookmarkObject

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The BookmarkObject parameter specifies the object in the result set where the displayed results start. The BookmarkObject parameter can't be used with the BookmarkIndex parameter.

```yaml
Type: ExtensibleQueueInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Exclude

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Exclude parameter specifies the types of queues you want to exclude from the results. Valid values for this parameter are:

- Internal
- External
- A valid queue DeliveryType value. For details, see the NextHopSolutionKey section in Queues and messages in queues.

```yaml
Type: QueueViewerIncludesAndExcludes
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Filter parameter specifies one or more queues by using OPATH filter syntax. The OPATH filter includes a queue property name followed by a comparison operator and value (for example, `"NextHopDomain -eq 'contoso.com'"`). For details about filterable queue properties and comparison operators, see [Queue properties in Exchange Server](https://learn.microsoft.com/Exchange/mail-flow/queues/queue-properties) and [Find queues and messages in queues in the Exchange Management Shell](https://learn.microsoft.com/Exchange/mail-flow/queues/queues-and-messages-in-powershell).

You can specify multiple criteria by using the and comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks (").

```yaml
Type: String
Parameter Sets: Server
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Include

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Include parameter specifies the types of queues you want to include the results. Valid values for this parameter are:

- Internal
- External
- A valid queue DeliveryType value. For details, see the NextHopSolutionKey section in Queues and messages in queues.

```yaml
Type: QueueViewerIncludesAndExcludes
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeBookmark

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The IncludeBookmark parameter specifies whether to include the bookmark object when the query results are displayed. The IncludeBookmark parameter is valid when it's used with the BookmarkObject or BookmarkIndex parameters. If you don't specify a value for the IncludeBookmark parameter, the default value of $true is used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -ReturnPageInfo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ReturnPageInfo parameter is a hidden parameter. Use it to return information about the total number of results and the index of the first object of the current page. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchForward

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SearchForward parameter specifies whether to search forward or backward in the result set. The default value is $true. This value causes the result page to be calculated forward from either the start of the result set or forward from a bookmark if specified.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

You can use the Server parameter and the Filter parameter in the same command. You can't use the Server parameter and the Identity parameter in the same command.

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

### -SortOrder

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SortOrder parameter specifies an array of message properties used to control the sort order of the result set. Separate each property by using a comma. Prepend a plus sign (+) symbol to the beginning of the property name to display the results in ascending order. Prepend a minus sign (-) symbol to the beginning of the property name to display the results in descending order.

If you don't specify a sort order, the result set is displayed in ascending order by QueueIdentity.

```yaml
Type: QueueViewerSortOrderEntry[]
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
