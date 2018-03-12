---
title: "Set-MailboxSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 23201ff0-e30a-4efd-9384-ab0af5815701

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-MailboxSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-MailboxSearch** cmdlet to modify an existing mailbox search.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MailboxSearch -Identity <EwsStoreObjectIdParameter> [-AllPublicFolderSources <$true | $false>] [-AllSourceMailboxes <$true | $false>] [-Confirm [<SwitchParameter>]] [-Description <String>] [-DomainController <Fqdn>] [-EndDate <ExDateTime>] [-EstimateOnly <$true | $false>] [-ExcludeDuplicateMessages <$true | $false>] [-Force <SwitchParameter>] [-IncludeKeywordStatistics <SwitchParameter>] [-IncludeUnsearchableItems <$true | $false>] [-InPlaceHoldEnabled <$true | $false>] [-ItemHoldPeriod <Unlimited>] [-Language <String>] [-LogLevel <Suppress | Basic | Full>] [-MessageTypes <KindKeyword[]>] [-Name <String>] [-PublicFolderSources <PublicFolderIdParameter[]>] [-Recipients <String[]>] [-SearchQuery <String>] [-Senders <String[]>] [-SourceMailboxes <RecipientIdParameter[]>] [-StartDate <ExDateTime>] [-StatisticsStartIndex <Int32>] [-StatusMailRecipients <RecipientIdParameter[]>] [-TargetMailbox <MailboxIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the start date of a mailbox search.
  
```
Set-MailboxSearch -Identity "Legal-ProjectX" -StartDate "01/01/2016"
```

### Example 2

In on-premises Exchange, this example adds all public folders to the existing mailbox search named Legal-ProjectX
  
```
Set-MailboxSearch -Identity "Legal-ProjectX" -AllPublicFolderSources $true
```

 **Note**:
  
If we wanted to place the results of this search on In-Place Hold, the _AllSourceMailboxes_ parameter must be set to `$false`. We could still include specific mailboxes in the search by using the _SourceMailboxes_ parameter.
  
## Detailed Description
<a name="DetailedDescription"> </a>

In on-premises Exchange and Exchange Online, mailbox searches are used for In-Place eDiscovery and In-Place Hold. For In-Place eDiscovery, unless specified, mailboxes on all Mailbox servers in an organization are searched. To create an In-Place Hold, you need to specify the mailboxes to place on hold using the _SourceMailboxes_ parameter. The search can be stopped, started, modified, and removed.
  
> [!CAUTION]
> By default, mailbox searches are performed across all Exchange 2016 and Exchange 2013 Mailbox servers in an Exchange organization, unless you constrain the search to fewer mailboxes by using the _SourceMailboxes_ parameter. To search mailboxes on Exchange 2010 Mailbox servers, run the command on an Exchange 2010 server.> If the In-Place eDiscovery search you want to modify is running, stop it before using the **Set-MailboxSearch** cmdlet. When restarting a search, any previous search results are removed from the target mailbox.
  
For more information, see [In-Place eDiscovery](https://technet.microsoft.com/library/6377cb7a-3416-4e15-8571-c45d2160fc6f.aspx) and[In-Place Hold](https://technet.microsoft.com/library/71031c06-852d-44d8-b558-dff444eaef8c.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.EwsStoreObjectIdParameter  <br/> |The _Identity_ parameter specifies the name of the mailbox search that you want to modify. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _AllPublicFolderSources_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _AllPublicFolderSources_ parameter specifies whether to include all public folders in the organization in the search. Valid values are: <br/>  `$true`: All public folders are included in the search. This value is required when the value of the _AllSourceMailboxes_ parameter is `$false` **and** you don't specify one or more source mailboxes by using the _SourceMailboxes_ parameter (the parameter value is blank [ `$null`]).  <br/>  `$false`: No public folders are included in the search. This is the default value. You can use this value when the value of the _AllSourceMailboxes_ parameter is `$true` **or** you specify one or more source mailboxes by using the _SourceMailboxes_ parameter (the parameter value isn't blank [ `$null`]).  <br/> |
| _AllSourceMailboxes_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _AllSourceMailboxes_ parameter specifies whether to include all mailboxes in the search. Valid values are: <br/>  `$true`: All mailboxes are included in the search. This value is required when the value of the _AllPublicFolderSources_ parameter is `$false` **and** you don't specify one or more source mailboxes by using the _SourceMailboxes_ parameter (the parameter value is blank [ `$null`]).  <br/>  `$false`: All mailboxes aren't included in the search. This is the default value. You can use this value when the value of the _AllPublicFolderSources_ parameter is `$true` **or** you specify one or more source mailboxes by using the _SourceMailboxes_ parameter (the parameter value isn't blank [ `$null`]).  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The _Description_ parameter specifies a description for the search. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> To clear the end date, use the value  `$null`.  <br/> |
| _EstimateOnly_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _EstimateOnly_ parameter specifies whether to provide only an estimate of the number of items that will be returned. Valid values are: <br/>  `$true`: Messages aren't copied to the target mailbox, and only an estimate of the number of items is returned.  <br/>  `$false`: Messages are copied to the target mailbox.  <br/> |
| _ExcludeDuplicateMessages_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ExcludeDuplicateMessages_ parameter eliminates duplication of messages across mailboxes in an In-Place eDiscovery search. Valid values are: <br/>  `$true`: Copy a single instance of a message if the same message exists in multiple folders or mailboxes. This is the default value.  <br/>  `$false`: Copy all instances of a message if the same message exists in multiple folders or mailboxes.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> Use this to switch suppress the confirmation prompt that indicates the previous search results will be removed from the target mailbox, and that the search will be restarted.  <br/> |
| _IncludeKeywordStatistics_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeKeywordStatistics_ switch returns keyword statistics (number of instances for each keyword). You don't need to specify a value with this switch. <br/> |
| _IncludeUnsearchableItems_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _IncludeUnsearchableItems_ parameter specifies whether items that couldn't be indexed by Exchange Search should be included in the results. Valid values are: <br/>  `$true`: Unsearchable items are included in the results.  <br/>  `$false`: Unsearchable items aren't included in the results. This is the default value.  <br/> > [!CAUTION]>  Unsearchable items aren't placed on hold for a query-based In-Place Hold. If you need to place unsearchable items on hold, you need to create an indefinite hold (a hold without specifying any search parameters, which provides functionality similar to Litigation Hold.          |
| _InPlaceHoldEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _InPlaceHoldEnabled_ parameter specifies whether to set an In-Place Hold on items in the search results. Valid values are: <br/>  `$true`: In-Place Hold is enabled on the search results.  <br/>  `$false`: In-Place Hold isn't enabled on the search results. This is the default value.  <br/>  You can't set an In-Place Hold on the search results when the _AllSourceMailboxes_ parameter is `$true`.  <br/> > [!IMPORTANT]>  If you attempt to place a hold but don't specify mailboxes using the _SourceMailboxes_ parameter, the command may succeed but the mailboxes are not placed on In-Place Hold.          |
| _ItemHoldPeriod_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _ItemHoldPeriod_ parameter specifies the number of days for the In-Place Hold onthe mailbox items (all items or the mailbox items that are returned in the search query results). You use this parameter with the _InPlaceHoldEnabled_ parameter to set an In-Place Hold. The duration is calculated from the time the item is received or created in the mailbox. Valid values are: <br/>  An integer. <br/>  The value `unlimited`. This is the default value. Items are held until you remove the In-Place Hold by removing the search by using the **Remove-MailboxSearch** cmdlet, removing the source mailbox from the search by using the **Set-MailboxSearch** cmdlet and the _SourceMailboxes_ parameter, or in on-premises Exchange, you remove all public folders from the search by using the **Set-MailboxSearch** cmdlet to change the _AllPublicFolderSources_ parameter from `$true` to `$false`.  <br/> |
| _Language_ <br/> |Optional  <br/> |System.String  <br/> |The _Language_ parameter specifies a locale for the mailbox search. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _LogLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Infoworker.MailboxSearch.LoggingLevel  <br/> | The _LogLevel_ parameter specifies a logging level for the mailbox search. Valid values are: <br/>  `Basic`: Basic details of the search are kept. This is the default value.  <br/>  `Full`: In addition to details in the Basic logging level, a full list of all messages returned is included.  <br/>  `Suppress`: Logging is suppressed. No logs are kept.  <br/> |
| _MessageTypes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Search.AqsParser.KindKeyword[]  <br/> | The _MessageTypes_ parameter specifies the message types to include in the search query. Valid values are: <br/>  `Contacts` <br/>  `Docs` <br/>  `Email` <br/>  `IM` <br/>  `Journals` <br/>  `Meetings` <br/>  `Notes` <br/>  `Tasks` <br/>  You can specify multiple values separated by commas. <br/>  The default value is blank ( `$null`), which means all message types are included. To clear all specified values, use the value  `$null`.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a name for the search. If the value contains spaces, enclose the value in quotation marks ("). <br/> The value of this parameter is used to create the top-level folder that holds the search results in the target mailbox that's specified by the _TargetMailbox_ parameter. <br/> |
| _PublicFolderSources_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Recipients_ <br/> |Optional  <br/> |System.String[]  <br/> |The _Recipients_ parameter specifies one or more recipients include in the search query. Messages that have the specified recipients in the **To**, **Cc**, and **Bcc** fields are returned in the search results. <br/> You can specify multiple recipients separated by commas. If the value contains spaces, enclose the value in quotation marks (").  <br/> To clear the recipients, use the value  `$null`.  <br/> |
| _SearchQuery_ <br/> |Optional  <br/> |System.String  <br/> | The _SearchQuery_ parameter specifies keywords for the search query by using the Keyword Query Language (KQL). For more information about KQL, see[Keyword Query Language syntax reference](https://go.microsoft.com/fwlink/?LinkId=269603).  <br/>  If you use this parameter with other search query parameters, the query combines these parameters by using the **AND** operator. <br/>  The other search query parameters are: <br/> _EndDate_ <br/> _MessageTypes_ <br/> _Recipients_ <br/> _Senders_ <br/> _StartDate_ <br/> |
| _Senders_ <br/> |Optional  <br/> |System.String[]  <br/> |The _Senders_ parameter specifies one or more senders to include in the search query. Messages that have the specified sender are returned in the search results. Senders can include users, distribution groups (messages sent by members of the group), SMTP addresses, or domains. <br/> You can specify multiple senders separated by commas. If the value contains spaces, enclose the value in quotation marks (").  <br/> To clear the senders, use the value  `$null`.  <br/> |
| _SourceMailboxes_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _SourceMailboxes_ parameter specifies the mailboxes to be searched. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  You can specify multiple values separated by commas. <br/>  To use this parameter, the _AllSourceMailboxes_ parameter needs to be `$false` (the default value). <br/>  To clear the source mailboxes, use the value `$null`.  <br/> > [!NOTE]>  To enable In-Place Hold on the search results, you need to set the _AllSourceMailboxes_ parameter to `$false` (the default value) and configure one or both of the following settings:>  Specify one or more source mailboxes by using the _SourceMailboxes_ parameter.>  In on-premises Exchange, set the _AllPublicFolderSources_ parameter to `$true`.           |
| _StartDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> To clear start date, use the value  `$null`.  <br/> |
| _StatisticsStartIndex_ <br/> |Optional  <br/> |System.Int32  <br/> |The _StatisticsStartIndex_ parameter is used by the Exchange admin center (EAC) to retrieve keyword statistics in a paged operation. <br/> |
| _StatusMailRecipients_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _StatusMailRecipients_ parameter specifies one or more recipients to receive a status email message upon completion of the search. You can use any value that uniquely identifies the recipient. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  You can specify multiple values separated by commas. <br/> |
| _TargetMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _TargetMailbox_ parameter specifies the destination mailbox where the search results are copied. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

