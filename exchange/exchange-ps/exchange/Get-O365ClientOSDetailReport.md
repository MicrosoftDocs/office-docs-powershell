---
applicable: Exchange Online
schema: 2.0.0
---

# Get-O365ClientOSDetailReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

This cmdlet will be deprecated after January 29, 2018. For information about the available replacement Microsoft Graph reports in Office 365, see the subtopics of Working with Office 365 usage reports in Microsoft Graph (https://go.microsoft.com/fwlink/p/?LinkID=865135).

Use the Get-O365ClientOSDetailReport cmdlet to get a detailed report of client operating system use.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).


## SYNTAX

### Set1
```
Get-O365ClientOSDetailReport [-EndDate <DateTime>] [-OperatingSystem <String>] [-OperatingSystemVersion <String>] [-ResultSize <Unlimited>] [-StartDate <DateTime>] [-WindowsLiveID <String>]
```

## DESCRIPTION
This report provides operating system details for all active users. The data contains a maximum of four operating systems per user, are aggregated daily and retained for 5 days. The properties that are returned in the results are described in the following list.

- TenantGuid: Unique identifier of the tenant.

- TenantName: Tenant name.

- Date: The timestamp for the connection for the operating system and version combination.

- WindowsLiveID: User ID in the format user@domain.

- DisplayName: User name.

- LastAccessTime: Last date the user connected with this operating system and version combination.

- ObjectId: User object ID.

- OperatingSystem: Operating system name.

- Version: Operating system version.

- OperatingSystemUsageCount: Number of days this operating system and version combination was used during the period of the report

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-O365ClientOSDetailReport -WindowsLiveID john@contoso.com -StartDate 05/01/2016 -EndDate 05/03/2016
```

This example retrieves the operating system details for user John between May 1, 2016 and May 3, 2016.



### -------------------------- Example 2 --------------------------
```
Get-O365ClientOSDetailReport -OperatingSystem Android
```

This example retrieves the operating system details for the Android operating system for the current 5 day retention period (no start and end date are specified).



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

### -OperatingSystem
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

### -OperatingSystemVersion
The OperatingSystermVersion parameter filters the report by operating system version. If you don't use this parameter, all operating system versions will be included. The parameter accepts version numbers up to the first minor version. For example, use 6 or 6.1, not 6.1.9600. Wildcards are not accepted.

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

### -WindowsLiveID
The WindowsLiveID filters the report by user ID.

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

## INPUTS

### 
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.


## OUTPUTS

### 
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.


## NOTES


## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/eaa592ac-cfd0-41e2-aeb2-6f17eccf5642.aspx)

