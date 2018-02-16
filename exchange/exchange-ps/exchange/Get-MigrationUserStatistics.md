---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MigrationUserStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MigrationUserStatistics cmdlet to view detailed information about the migration requested for a specific user.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MigrationUserStatistics [-Identity] <MigrationUserIdParameter> [-Diagnostic] [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>] [-IncludeReport] [-LimitSkippedItemsTo <Int32>] [-IncludeSkippedItems]
 [-Partition <MailboxIdParameter>] [-SkipSubscription] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox move and migration permissions" section in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -IncludeReport | Format-List Status,Error,Report
```

This example uses the IncludeReport parameter to display detailed information about the migration status for the user.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -IncludeReport | FL Status,Error,Report
```

This example uses the IncludeReport parameter to display detailed information about the migration status for the user.

### Example 1 -------------------------- (Exchange Online)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -IncludeReport | FL Status,Error,Report
```

This example uses the IncludeReport parameter to display detailed information about the migration status for the user.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com | Format-List SkippedItemCount,SkippedItems
```

This example displays the number of mailbox items that failed to migrate, which are called skipped items, and information about each skipped item.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com | FL SkippedItemCount,SkippedItems
```

This example displays the number of mailbox items that failed to migrate, which are called skipped items, and information about each skipped item.

### Example 2 -------------------------- (Exchange Online)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com | FL SkippedItemCount,SkippedItems
```

This example displays the number of mailbox items that failed to migrate, which are called skipped items, and information about each skipped item.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -LimitSkippedItemsTo 20 | Format-List SkippedItemCount,SkippedItems
```

This example displays results information in the SkippedItems property for a maximum of 20 skipped items.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -LimitSkippedItemsTo 20 | FL SkippedItemCount,SkippedItems
```

This example displays results information in the SkippedItems property for a maximum of 20 skipped items.

### Example 3 -------------------------- (Exchange Online)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -LimitSkippedItemsTo 20 | FL SkippedItemCount,SkippedItems
```

This example displays results information in the SkippedItems property for a maximum of 20 skipped items.

### Example 4 -------------------------- (Exchange Server 2013)
```
Get-MigrationUser -BatchId StagedBatch1 | Get-MigrationUserStatistics
```

This example displays detailed information about users in the migration batch named StagedBatch1.

### Example 4 -------------------------- (Exchange Server 2016)
```
Get-MigrationUser -BatchId StagedBatch1 | Get-MigrationUserStatistics
```

This example displays detailed information about users in the migration batch named StagedBatch1.

### Example 4 -------------------------- (Exchange Online)
```
Get-MigrationUser -BatchId StagedBatch1 | Get-MigrationUserStatistics
```

This example displays detailed information about users in the migration batch named StagedBatch1.

### Example 5 -------------------------- (Exchange Server 2013)
```
Get-MigrationUser | Get-MigrationUserStatistics
```

This example displays detailed information about users from all current migration batches.

### Example 5 -------------------------- (Exchange Server 2016)
```
Get-MigrationUser | Get-MigrationUserStatistics
```

This example displays detailed information about users from all current migration batches.

### Example 5 -------------------------- (Exchange Online)
```
Get-MigrationUser | Get-MigrationUserStatistics
```

This example displays detailed information about users from all current migration batches.

### Example 6 -------------------------- (Exchange Server 2013)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -Diagnostic | FL Status,Error,DiagnosticInfo
```

This example uses the Diagnostic parameter to display detailed troubleshooting information about the migration for the user.

### Example 6 -------------------------- (Exchange Server 2016)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -Diagnostic | FL Status,Error,DiagnosticInfo
```

This example uses the Diagnostic parameter to display detailed troubleshooting information about the migration for the user.

### Example 6 -------------------------- (Exchange Online)
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -Diagnostic | FL Status,Error,DiagnosticInfo
```

This example uses the Diagnostic parameter to display detailed troubleshooting information about the migration for the user.

## PARAMETERS

### -Identity
!!! Exchange Server 2013

The Identity parameter specifies the user that you want to retrieve information about. Use an email address as the value for the Identity parameter.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the user that you want to retrieve migration information about. Use an email address as the value for this parameter.



```yaml
Type: MigrationUserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Diagnostic
The Diagnostic switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticArgument
The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

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

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeReport
The IncludeReport switch specifies whether to return additional details, which can be used for troubleshooting.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LimitSkippedItemsTo
The LimitSkippedItemsTo parameter specifies the maximum number of skipped items to display information about in the SkippedItems property in command output. For example, if this parameter is set to 5, the cmdlet returns information for up to five skipped items for the specified user, even if there are more than five skipped items.

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

### -IncludeSkippedItems
The IncludeSkippedItems switch specifies whether to include skipped items for the user. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partition
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipSubscription
The SkipSubscription switch specifies whether to skip loading the subscription for the user. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/b771bb31-7f5a-462f-b5e2-ce49fde9bfe5.aspx)

