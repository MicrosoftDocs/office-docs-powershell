---
title: "New-MailboxSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 74303b47-bb49-407c-a43b-590356eae35c

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-MailboxSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
> [!NOTE]
> On July 1, 2017, you'll no longer be able to use the **New-MailboxSearch** cmdlet to create In-Place eDiscovery searches and In-Place Holds in Exchange Online. To create eDiscovery searches and eDiscovery case holds, please start using[New-ComplianceSearch](http://technet.microsoft.com/library/433d1602-a026-4d63-be5e-605dd6b7b0d0.aspx) and[New-CaseHoldPolicy](http://technet.microsoft.com/library/22daa8d4-9800-4b64-a085-95fac12df5b0.aspx) in the Office 365 Security &amp; Compliance Center. You'll still be able to use **Set-MailboxSearch** to modify existing In-Place eDiscovery searches and In-Place Holds. Creating new searches and holds in Exchange Server 2013 will still be supported, and searches run from your on-premises organization in an Exchange hybrid deployment aren't affected by this change.
  
Use the **New-MailboxSearch** cmdlet to create a mailbox search and either get an estimate of search results, place search results on In-Place Hold or copy them to a Discovery mailbox. You can also place all contents in a mailbox on hold by not specifying a search query, which accomplishes similar results as Litigation Hold.
  
> [!CAUTION]
> By default, mailbox searches are performed across all Exchange 2016 and Exchange 2013 Mailbox servers in an Exchange organization, unless you constrain the search to fewer mailboxes by using the  _SourceMailboxes_ parameter. To search mailboxes on Exchange 2010 Mailbox servers, run the command on an Exchange 2010 server.
  
For more information, see [In-Place eDiscovery](http://technet.microsoft.com/library/6377cb7a-3416-4e15-8571-c45d2160fc6f.aspx) and[In-Place Hold](http://technet.microsoft.com/library/71031c06-852d-44d8-b558-dff444eaef8c.aspx).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MailboxSearch -Name <String> [-AllPublicFolderSources <$true | $false>] [-AllSourceMailboxes <$true | $false>] [-Confirm [<SwitchParameter>]] [-Description <String>] [-DomainController <Fqdn>] [-EndDate <ExDateTime>] [-EstimateOnly <SwitchParameter>] [-ExcludeDuplicateMessages <$true | $false>] [-Force <SwitchParameter>] [-IncludeKeywordStatistics <SwitchParameter>] [-IncludeUnsearchableItems <SwitchParameter>] [-InPlaceHoldEnabled <$true | $false>] [-InPlaceHoldIdentity <String>] [-ItemHoldPeriod <Unlimited>] [-Language <CultureInfo>] [-LogLevel <Suppress | Basic | Full>] [-MessageTypes <KindKeyword[]>] [-PublicFolderSources <PublicFolderIdParameter[]>] [-Recipients <String[]>] [-SearchQuery <String>] [-Senders <String[]>] [-SourceMailboxes <RecipientIdParameter[]>] [-StartDate <ExDateTime>] [-StatusMailRecipients <RecipientIdParameter[]>] [-TargetMailbox <MailboxIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the mailbox search Legal-ProjectX. The search uses several parameters to restrict the search query:
  
-  _SourceMailboxes_: This parameter restricts the search to members of the DG-Marketing and DG-Executives distribution groups.
    
-  _Recipients_: This parameter specifies that the search includes all mail sent to the domain contoso.com.
    
-  _SearchQuery_: This parameter specifies a KQL query for messages with either the words project or report and for messages with attachments.
    
-  _StartDate_ and _EndDate_: These parameters specify the start date of January 1, 2015, and end date of December 31, 2015, for the search.
    
-  _TargetMailbox_: This parameter specifies that search results should be copied to the discovery mailbox LegalDiscovery.
    
-  _StatusMailRecipeints_: This parameter specifies that the distribution group DG-DiscoveryTeam is to receive a notification when the search is complete.
    
```
New-MailboxSearch -Name "Legal-ProjectX" -SourceMailboxes DG-Marketing,DG-Executives -TargetMailbox LegalDiscovery@contoso.com -StartDate "01/01/2015" -EndDate "12/31/2015" -Recipients "@contoso.com" -SearchQuery "project report hasattachments:true" -StatusMailRecipients "DG-DiscoveryTeam"
```

### Example 2

This example creates an In-Place Hold Hold-ProjectX and places all members of the distribution group DG-Finance on hold. Because the search doesn't specify the  _SearchQuery_ and _ItemHoldPeriod_ parameters, all messages in mailboxes returned are placed on indefinite In-Place Hold.
  
```
New-MailboxSearch -Name "Hold-ProjectX" -SourceMailboxes DG-Finance -InPlaceHoldEnabled $true
```

### Example 3

This example creates an In-Place Hold Hold-tailspintoys and places all members of the distribution group DG-Research on hold. Because the search specifies the  _SearchQuery_ parameter, only messages that match the search query are placed on indefinite In-Place Hold.
  
```
New-MailboxSearch -Name "Hold-tailspintoys" -SourceMailboxes DG-Research -SearchQuery "'Patent' AND 'Project tailspintoys'" -InPlaceHoldEnabled $true
```

### Example 4

In on-premises Exchange, this example creates an In-Place Hold named Hold for all PFs that places all content in all public folders on In-Place hold, with an unlimited hold duration.
  
```
New-MailboxSearch -Name "Hold for all PFs" -AllPublicFolderSources $true -InPlaceHoldEnabled $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-MailboxSearch** cmdlet creates an In-Place eDiscovery search or an In-Place Hold. Unless specified, mailboxes on all Mailbox servers in an organization are searched. You can stop, start, modify, or remove the search.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies a friendly name for the search. If the value contains spaces, enclose the value in quotation marks ("). <br/> The value of this parameter is used to create the top-level folder that holds the search results in the target mailbox that's specified by the  _TargetMailbox_ parameter. <br/> |
| _AllPublicFolderSources_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _AllPublicFolderSources_ parameter specifies whether to include all public folders in the organization in the search. Valid values are: <br/>  `$true`: All public folders are included in the search. This value is required when the value of the  _AllSourceMailboxes_ parameter is `$false` **and** you don't specify one or more source mailboxes by using the _SourceMailboxes_ parameter (the parameter value is blank [ `$null`]).  <br/>  `$false`: No public folders are included in the search. This is the default value. You can use this value when the value of the  _AllSourceMailboxes_ parameter is `$true` **or** you specify one or more source mailboxes by using the _SourceMailboxes_ parameter (the parameter value isn't blank [ `$null`]).  <br/> |
| _AllSourceMailboxes_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _AllSourceMailboxes_ parameter specifies whether to include all mailboxes in the search. Valid values are: <br/>  `$true`: All mailboxes are included in the search. This value is required when the value of the  _AllPublicFolderSources_ parameter is `$false` **and** you don't specify one or more source mailboxes by using the _SourceMailboxes_ parameter (the parameter value is blank [ `$null`]).  <br/>  `$false`: All mailboxes aren't included in the search. This is the default value. You can use this value when the value of the  _AllPublicFolderSources_ parameter is `$true` **or** you specify one or more source mailboxes by using the _SourceMailboxes_ parameter (the parameter value isn't blank [ `$null`]).  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies a description for the search. The description isn't displayed to users. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _EstimateOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _EstimateOnly_ switch specifies that only an estimate of the number of items that will be returned is provided. You don't need to specify a value with this switch. <br/> If you don't use this switch, messages are copied to the target mailbox.  <br/> |
| _ExcludeDuplicateMessages_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ExcludeDuplicateMessages_ parameter eliminates duplication of messages in search results. Valid values are: <br/>  `$true`: Copy a single instance of a message if the same message exists in multiple folders or mailboxes. This is the default value.  <br/>  `$false`: Copy all instances of a message if the same message exists in multiple folders or mailboxes.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _IncludeKeywordStatistics_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeKeywordStatistics_ switch returns keyword statistics (number of instances for each keyword) in search results. You don't need to specify a value with this switch. <br/> |
| _IncludeUnsearchableItems_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeUnsearchableItems_ switch specifies that items that couldn't be indexed by Exchange Search should be included in the results. You don't need to specify a value with this switch. <br/> > [!CAUTION]> Unsearchable items aren't placed on hold for a query-based In-Place Hold. If you need to place unsearchable items on hold, you need to create an indefinite hold (a hold without specifying any search parameters, which provides functionality similar to Litigation Hold.           |
| _InPlaceHoldEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _InPlaceHoldEnabled_ parameter specifies whether to set an In-Place Hold on items in the search results. Valid values are: <br/>  `$true`: In-Place Hold is enabled on the search results.  <br/>  `$false`: In-Place Hold isn't enabled on the search results. This is the default value.  <br/>  You can't set an In-Place Hold on the search results when the _AllSourceMailboxes_ parameter is `$true`.  <br/> > [!IMPORTANT]>  If you attempt to place a hold but don't specify mailboxes using the _SourceMailboxes_ parameter, the command may succeed but the mailboxes are not placed on In-Place Hold.          |
| _InPlaceHoldIdentity_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ItemHoldPeriod_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _ItemHoldPeriod_ parameter specifies the number of days for the In-Place Hold onthe mailbox items (all mailbox items or the items that are returned in the search query results). The duration is calculated from the time the item is received or created in the mailbox. Valid values are: <br/>  An integer. <br/>  The value `unlimited`. This is the default value. Items are held until you remove the In-Place Hold by removing the search by using the **Remove-MailboxSearch** cmdlet, removing the source mailbox from the search by using the **Set-MailboxSearch** cmdlet and the _SourceMailboxes_ parameter, or in on-premises Exchange, you remove all public folders from the search by using the **Set-MailboxSearch** cmdlet to change the _AllPublicFolderSources_ parameter from `$true` to `$false`.  <br/> |
| _Language_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The  _Language_ parameter specifies a locale for the search. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _LogLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Infoworker.MailboxSearch.LoggingLevel  <br/> | The _LogLevel_ parameter specifies the logging level for the search. Valid values are: <br/>  `Suppress`: No logs are kept.  <br/>  `Basic`: Basic information about the query and who ran it is kept. This is the default value.  <br/>  `Full`: In addition to the information kept by the  `Basic` log level, the `Full` log level adds a complete list of search results. <br/> |
| _MessageTypes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Search.AqsParser.KindKeyword[]  <br/> | The _MessageTypes_ parameter specifies the message types to include in the search query. Valid values are: <br/>  `Contacts` <br/>  `Docs` <br/>  `Email` <br/>  `IM` <br/>  `Journals` <br/>  `Meetings` <br/>  `Notes` <br/>  `Tasks` <br/>  You can specify multiple values separated by commas. <br/>  The default value is blank ( `$null`), which means all message types are included.  <br/> |
| _PublicFolderSources_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Recipients_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _Recipients_ parameter specifies one or more recipients to include in the search query. Messages that have the specified recipients in the **To**, **Cc**, and **Bcc** fields are returned in the search results. <br/> You can specify multiple recipients separated by commas.  <br/> |
| _SearchQuery_ <br/> |Optional  <br/> |System.String  <br/> | The _SearchQuery_ parameter specifies keywords for the search query by using the Keyword Query Language (KQL). For more information about KQL, see[Keyword Query Language syntax reference](https://go.microsoft.com/fwlink/?LinkId=269603).  <br/>  If you use this parameter with other search query parameters, the query combines these parameters by using the **AND** operator. <br/>  The other search query parameters are: <br/>  _EndDate_ <br/>  _MessageTypes_ <br/>  _Recipients_ <br/>  _Senders_ <br/>  _StartDate_ <br/> |
| _Senders_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _Senders_ parameter specifies one or more senders to include in the search query. Messages that have the specified sender are returned in the search results. Senders can include users, distribution groups (messages sent by members of the group), SMTP addresses, or domains. <br/> You can specify multiple senders separated by commas. If the value contains spaces, enclose the value in quotation marks (").  <br/> |
| _SourceMailboxes_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _SourceMailboxes_ parameter specifies the identity of one or more mailboxes to be searched. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  You can specify multiple values separated by commas. <br/>  To use this parameter, the _AllSourceMailboxes_ parameter needs to be `$false` (the default value). <br/>  The default value is blank ( `$null`), which means no source mailboxes are specified. To clear the source mailboxes, use the value  `$null`.  <br/> > [!NOTE]>  To enable In-Place Hold on the search results, you need to set the _AllSourceMailboxes_ parameter to `$false` (the default value) and configure one or both of the following settings:>  Specify one ore more source mailboxes by using the _SourceMailboxes_ parameter.>  In on-premises Exchange, set the _AllPublicFolderSources_ parameter to `$true`.           |
| _StartDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _StatusMailRecipients_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _StatusMailRecipients_ parameter specifies one or more recipients to receive a status email message upon completion of the search. You can use any value that uniquely identifies the recipient. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  You can specify multiple values separated by commas. <br/> |
| _TargetMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _TargetMailbox_ parameter specifies the destination mailbox where the search results are copied. You can use any value that uniquely identifies themailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

