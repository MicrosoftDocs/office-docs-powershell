---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-AuditLogSearch

## SYNOPSIS
!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-AuditLogSearch cmdlet to return a list of current audit log searches that were created with the New-AdminAuditLogSearch or New-MailboxAuditLogSearch cmdlets. The Get-AuditLogSearch cmdlet also returns audit log searches that are initiated whenever an administrator uses the Exchange Admin Center (EAC) to export audit logs.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-AuditLogSearch cmdlet to return a list of current audit log searches that were created with the New-AdminAuditLogSearch or New-MailboxAuditLogSearch cmdlets. The Get-AuditLogSearch cmdlet also returns audit log searches that are initiated whenever an administrator uses the Exchange admin center (EAC) to export audit logs.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-AuditLogSearch [[-Identity] <AuditLogSearchIdParameter>] [-CreatedAfter <ExDateTime>]
 [-CreatedBefore <ExDateTime>] [-ResultSize <Int32>] [-Type <String>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2013

Run the Get-AuditLogSearch cmdlet to return a list of pending audit log searches. If an audit log search has been completed, it won't be displayed in the list of audit log searches.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "View-only administrator audit logging" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016, Exchange Online

Run the Get-AuditLogSearch cmdlet to return a list of pending audit log searches. If an audit log search has been completed, it won't be displayed in the list of audit log searches.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-AuditLogSearch | FL
```

This example displays detailed information for all current audit log searches.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-AuditLogSearch | FL
```

This example displays detailed information for all current audit log searches.

### Example 1 -------------------------- (Exchange Online)
```
Get-AuditLogSearch | FL
```

This example displays detailed information for all current audit log searches.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-AuditLogSearch -Type admin
```

This example returns a list of current administrator audit log searches.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-AuditLogSearch -Type admin
```

This example returns a list of current administrator audit log searches.

### Example 2 -------------------------- (Exchange Online)
```
Get-AuditLogSearch -Type admin
```

This example returns a list of current administrator audit log searches.

## PARAMETERS

### -CreatedAfter
!!! Exchange Server 2013

The CreatedAfter parameter filters the results to audit log searches that were created after the specified date.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



!!! Exchange Server 2016, Exchange Online

The CreatedAfter parameter filters the results to audit log searches that were created after the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreatedBefore
!!! Exchange Server 2013

The CreatedBefore parameter filters the results to audit log searches that were created before the specified date.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



!!! Exchange Server 2016, Exchange Online

The CreatedBefore parameter filters the results to audit log searches that were created before the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the GUID for an audit log search. You can run the command Get-AuditLogSearch | Format-List Identity to display the GUIDs for all current audit log searches.

```yaml
Type: AuditLogSearchIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the type of audit log searches to return. Use the value Admin to return administrator audit log searches or use mailbox to return mailbox audit log searches. If the Type parameter isn't used, the cmdlet returns both administrator and mailbox audit log searches.

```yaml
Type: String
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/5550b2c9-cb38-41cd-82a5-41d2125ad2d5.aspx)

