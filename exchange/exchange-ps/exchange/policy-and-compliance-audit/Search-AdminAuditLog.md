---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Search-AdminAuditLog
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Search-AdminAuditLog

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Search-AdminAuditLog cmdlet to search the contents of the administrator audit log.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Search-AdminAuditLog [[-Cmdlets <MultiValuedProperty>]
 [-DomainController <Fqdn>] [-EndDate <ExDateTime>] [-IsSuccess <$true | $false>]
 [-ObjectIds <MultiValuedProperty>] [-Parameters <MultiValuedProperty>] [-ResultSize <Int32>]
 [-StartDate <ExDateTime>] [-StartIndex <Int32>] [-UserIds <MultiValuedProperty>]
 [-ExternalAccess <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
If you run the Search-AdminAuditLog cmdlet without any parameters, up to 1,000 log entries are returned by default.

Note: In Exchange Online, if you don't use the StartDate or EndDate parameters, only results from the last 14 days are returned.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Search-AdminAuditLog -Cmdlets New-RoleGroup, New-ManagementRoleAssignment
```

This example finds all the administrator audit log entries that contain either the New-RoleGroup or the New-ManagementRoleAssignment cmdlet.

### -------------------------- Example 2 --------------------------
```
Search-AdminAuditLog -Cmdlets Set-Mailbox -Parameters UseDatabaseQuotaDefaults, ProhibitSendReceiveQuota, ProhibitSendQuota -StartDate 01/24/2015 -EndDate 02/12/2015 -IsSuccess $true
```

This example finds all the administrator audit log entries that match the following criteria:

- Cmdlets: Set-Mailbox

- Parameters: UseDatabaseQuotaDefaults, ProhibitSendReceiveQuota, ProhibitSendQuota

- StartDate: 01/24/2015

- EndDate: 02/12/2015

The command completed successfully

### -------------------------- Example 3 --------------------------
```
$LogEntries = Search-AdminAuditLog -Cmdlets Write-AdminAuditLog; $LogEntries | ForEach { $_.CmdletParameters }
```

This example displays all the comments written to the administrator audit log by the Write-AdminAuditLog cmdlet.

First, store the audit log entries in a temporary variable. Then, iterate through all the audit log entries returned and display the Parameters property.

### -------------------------- Example 4 --------------------------
```
Search-AdminAuditLog -ExternalAccess $true -StartDate 09/17/2015 -EndDate 10/02/2015
```

This example returns entries in the administrator audit log of an Exchange Online organization for cmdlets run by Microsoft datacenter administrators between September 17, 2015 and October 2, 2015.

## PARAMETERS

### -Cmdlets
The Cmdlets parameter specifies the cmdlets you want to search for in the administrator audit log. Only the log entries that contain the cmdlets you specify are returned.

If you want to specify more than one cmdlet, separate each cmdlet with a comma.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

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

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsSuccess
The IsSuccess parameter specifies whether only administrator audit log entries that indicated a success or failure should be returned. Valid values are $true and $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ObjectIds
The ObjectIds parameter specifies that only administrator audit log entries that contain the specified changed objects should be returned. This parameter accepts a variety of objects, such as mailbox aliases, Send connector names, and so on.

If you want to specify more than one object ID, separate each ID with a comma.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parameters
The Parameters parameter specifies the parameters you want to search for in the administrator audit log. Only the log entries that contain the parameters you specify are returned. You can only use this parameter if you use the Cmdlets parameter.

If you want to specify more than one parameter, separate each parameter with a comma.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartIndex
The StartIndex parameter specifies the position in the result set where the displayed results start.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserIds
The UserIds parameter specifies that only the administrator audit log entries that contain the specified ID of the user who ran the cmdlet should be returned.

If you want to specify more than one user ID, separate each ID with a comma.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAccess
The ExternalAccess parameter returns only audit log entries for cmdlets that were run by a user outside of your organization. In Exchange Online, use this parameter to return audit log entries for cmdlets run by Microsoft datacenter administrators.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/87a0cd2d-dd59-4098-b740-75f0cc7bf8e7.aspx)
