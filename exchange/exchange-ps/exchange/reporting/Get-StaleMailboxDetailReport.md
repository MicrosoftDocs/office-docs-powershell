---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online
title: Get-StaleMailboxDetailReport
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-StaleMailboxDetailReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

This cmdlet will be deprecated after January 29, 2018. For information about the available replacement Microsoft Graph reports in Office 365, see the subtopics of Working with Office 365 usage reports in Microsoft Graph (https://go.microsoft.com/fwlink/p/?LinkID=865135).

Use the Get-StaleMailboxDetailReport cmdlet to view mailboxes that haven't been accessed for at least 30 days.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-StaleMailboxDetailReport [-EndDate <DateTime>] [-ResultSize <Unlimited>] [-StartDate <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-StaleMailboxDetailReport
```

This example retrieves all the mailboxes that haven't been accessed for at least 30 days.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. The default value is 1000.

This cmdlet returns a maximum of 50000 results, even when you use the value unlimited. If your organization has more than 50000 mailboxes, you can use the Select-Object and Sort-Object cmdlets in multiple commands to return all of the results. For example, if your organization has 90000 mailboxes, run the following commands:

Get-StaleMailboxDetailReport -ResultSize unlimited | Sort-Object UserName -Unique | Select-Object TenantName,UserName,WindowsLiveID,LastLogin,DaysInactive -First 45000 | Export-Csv "C:\\Data\\First45k Stale.csv"

Get-StaleMailboxDetailReport -ResultSize unlimited | Sort-Object UserName -Unique | Select-Object TenantName,UserName,WindowsLiveID,LastLogin,DaysInactive -Last 45000 | Export-Csv "C:\\Data\\Last45k Stale.csv"

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

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### 
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### 
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/661c1652-b9ff-44fb-a465-9e3e9ee307f9.aspx)
