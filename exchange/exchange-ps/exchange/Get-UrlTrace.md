---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-urltrace
applicable: Exchange Online, Exchange Online Protection
title: Get-UrlTrace
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-UrlTrace

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-UrlTrace cmdlet to view the results of Safe Links actions in your cloud-based organization. Currently, the date range can't be more than seven days.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UrlTrace
 [-ClickId <Guid>]
 [-EndDate <DateTime>]
 [-Expression <Expression>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-RecipientAddress <MultiValuedProperty>]
 [-StartDate <DateTime>]
 [-UrlOrDomain <MultiValuedProperty>]
 [-Workloads <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Links is a feature in Advanced Threat Protection that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site. For more information about Advanced Threat Protection Safe Links, see [Office 365 ATP Safe Links](https://docs.microsoft.com/microsoft-365/security/office-365-security/atp-safe-links).

For the reporting period you specify, the cmdlet returns the following information:

- Time Clicked: The date/time when the URL in the message body was clicked. Every analyzed URL click is recorded, even when a user clicks a URL in an existing message that's already been scanned.

- Workload

- Application Name

- Message ID

- Message Trace ID

- Source ID

- Source Details

- ClickId: A GUID for each URL that was analyzed in a message.

- Recipient Address

- URL

- User IP Address

- UrlBlocked: The URL was detected as malicious by Safe Links (only the initial block, not subsequent clicks), or the user clicked the URL while the scan in progress (users are taken to a notification page that asks them to try again after the scan is complete).

- UrlClicked: The URL is blocked, but the applicable Safe Links policy has the DoNotAllowClickThrough parameter value $false (click through is allowed). Updated policies aren't applied to existing messages that have already been scanned. New or updated policies are applied to new messages that were received after the policy is applied to the mailbox.

- Click Action: The action of a specific click. Possible values are:

• None: We were unable to capture the verdict for the URL. The user might have clicked through the URL.
• Allowed: The user was allowed to navigate to the URL.
• Blocked: The User was blocked from navigating to the URL.
• Pending verdict: The user was presented with the detonation pending page.
• Blocked overridden: The user was blocked from navigating to the URL; however, the user overrode the block to navigate to the URL.
• Pending verdict bypassed: The user presented with the detonation page; however, the user overrode the page to navigate to the URL.
• Error: The user was presented with the error page. This can also mean there was an error in capturing the verdict.
• Failure: There was unknown exception while capturing the verdict. The user might have clicked through the URL.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-UrlTrace -RecipientAddress "michelle@contoso.com" -StartDate "5/9/2016" -EndDate "5/11/2016"
```

This example returns the results of Safe Links actions during the specified time period for the user michelle@contoso.com.

## PARAMETERS

### -ClickId
The ClickId parameter filters the results by the URL that was scanned in the message. Each URL is represented as a GUID value.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Expression
This parameter is reserved for internal Microsoft use.

```yaml
Type: Expression
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Page
The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize
The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddress
The RecipientAddress parameter filters the results by the recipient's email address. You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -UrlOrDomain
The UrlOrDomain parameter filters the results by the specified URL or domain value.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Workloads
The Workloads parameter filters the results by the specified workload. Valid values are:

- Mail

- OfficeClient

- Other

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
