---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online
title: Get-O365ClientOSReport
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-O365ClientOSReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

This cmdlet will be deprecated after January 29, 2018. For information about the available replacement Microsoft Graph reports in Office 365, see the subtopics of Working with Office 365 usage reports in Microsoft Graph (https://go.microsoft.com/fwlink/p/?LinkID=865135).

Use the Get-O365ClientOSReport cmdlet to get a summary report of client operating system use.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-O365ClientOSReport [-EndDate <DateTime>] [-OS <String>] [-ResultSize <Unlimited>] [-StartDate <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
The report displays the client use statistics for the five most recent versions of the operating systems named in the OS parameter description. All previous operating system versions are combined into a sixth category named Others. The following list describes the properties that are returned in the results.

- TenantGuid: Unique identifier of the tenant.

- TenantName: Tenant name.

- Date: Last time the line item data was aggregated.

- OperatingSystem: Operating system name.

- Version: Operating system version.

- OperatingSystemUsageCount: Number of times a given operating system and version combination connected to the service during the reporting period.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-O365ClientOSReport -OS Windows
```

This example gets the summary report of client Windows use for the 366 day data retention period (no start and end date are specified).

### -------------------------- Example 2 --------------------------
```
Get-O365ClientOSReport -StartDate 06/13/2013 -EndDate 06/15/2013
```

This example retrieves the client operating system information between June 13, 2013 and June 15, 2013.

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

### -OS
The OS parameter filters the report by operating system. If you don't use this parameter, all operating systems will be included. The accepted values for this parameter are:

- Windows

- Android

- iOS

- "Mac OS"

```yaml
Type: String
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

[Online Version](https://technet.microsoft.com/library/a0266b64-2455-4037-bbc5-34730691247b.aspx)
