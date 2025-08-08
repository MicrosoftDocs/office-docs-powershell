---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/search-adminauditlog
schema: 2.0.0
title: Search-AdminAuditLog
---

# Search-AdminAuditLog

## SYNOPSIS
> [!NOTE]
> This cmdlet will be deprecated in the cloud-based service. To access audit log data, use the Search-UnifiedAuditLog cmdlet. For more information, see this blog post: <https://aka.ms/AdminAuditCmdletBlog>.

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Search-AdminAuditLog cmdlet to search the contents of the administrator audit log. Administrator audit logging records when a user or administrator makes a change in your organization (in the Exchange admin center or by using cmdlets).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Search-AdminAuditLog
 [-Cmdlets <MultiValuedProperty>]
 [-DomainController <Fqdn>]
 [-EndDate <ExDateTime>]
 [-ExternalAccess <Boolean>]
 [-IsSuccess <Boolean>]
 [-ObjectIds <MultiValuedProperty>]
 [-Parameters <MultiValuedProperty>]
 [-ResultSize <Int32>]
 [-StartDate <ExDateTime>]
 [-StartIndex <Int32>]
 [-UserIds <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
If you run the Search-AdminAuditLog cmdlet without any parameters, up to 1,000 log entries are returned by default.

In Exchange Online PowerShell, if you don't use the StartDate or EndDate parameters, only results from the last 14 days are returned.

In Exchange Online PowerShell, data is available for the last 90 days. You can enter dates older than 90 days, but only data from the last 90 days are returned.

For more information about the structure and properties of the audit log, see [Administrator audit log structure](https://learn.microsoft.com/Exchange/policy-and-compliance/admin-audit-logging/log-structure).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Search-AdminAuditLog -Cmdlets New-RoleGroup,New-ManagementRoleAssignment
```

This example finds all the administrator audit log entries that contain either the New-RoleGroup or the New-ManagementRoleAssignment cmdlet.

### Example 2
```powershell
Search-AdminAuditLog -Cmdlets Set-Mailbox -Parameters UseDatabaseQuotaDefaults,ProhibitSendReceiveQuota,ProhibitSendQuota -StartDate 01/24/2018 -EndDate 02/12/2018 -IsSuccess $true
```

This example finds all the administrator audit log entries that match the following criteria:

- Cmdlets: Set-Mailbox
- Parameters: UseDatabaseQuotaDefaults, ProhibitSendReceiveQuota, ProhibitSendQuota
- StartDate: 01/24/2018
- EndDate: 02/12/2018

The command completed successfully

### Example 3
```powershell
$LogEntries = Search-AdminAuditLog -Cmdlets Write-AdminAuditLog

$LogEntries | ForEach { $_.CmdletParameters }
```

This example displays all the comments written to the administrator audit log by the Write-AdminAuditLog cmdlet.

First, store the audit log entries in a temporary variable. Then, iterate through all the audit log entries returned and display the Parameters property.

### Example 4
```powershell
Search-AdminAuditLog -ExternalAccess $true -StartDate 09/17/2018 -EndDate 10/02/2018
```

This example returns entries in the administrator audit log of an Exchange Online organization for cmdlets run by Microsoft datacenter administrators between September 17, 2018 and October 2, 2018.

## PARAMETERS

### -Cmdlets

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The Cmdlets parameter filters the results by the cmdlets that were used. You can specify multiple cmdlets separated by commas.

In the results of this cmdlet, this property is named **CmdletName**.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In the cloud-based service, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC). To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

In the results of this cmdlet, the date/time when the change was made (the cmdlet was run) is returned in the property named **RunDate**.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAccess

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The ExternalAccess parameter filters the results by changes that were made (cmdlets that were run) by users outside of your organization. Valid values are:

- $true: Only return audit log entries where the change was made by an external user. In Exchange Online, use value to return audit log entries for changes that were made by Microsoft datacenter administrators.
- $false: Only return audit log entries where the change was made by an internal user.

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

### -IsSuccess

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The IsSuccess parameter filters the results by whether the changes were successful. Valid values are:

- $true: Only return audit log entries where the change was successful (in other words, the cmdlet ran successfully).
- $false: Only return audit log entries where the change was not successful (in other words, the cmdlet did not run successfully and resulted in an error).

In the results of this cmdlet, this property is named **Succeeded**.

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

### -ObjectIds

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The ObjectIds parameter filters the results by the object that was modified (the mailbox, public folder, Send connector, transport rule, accepted domain, etc. that the cmdlet operated on). A valid value depends on how the object is represented in the audit log. For example:

- Name
- Canonical distinguished name (for example, contoso.com/Users/Akia Al-Zuhairi)
- Public folder identity (for example, \\Engineering\\Customer Discussion)

You likely need to use other filtering parameters on this cmdlet to narrow down the results and identify the types of objects that you're interested in. In the results of this cmdlet, this property is named **ObjectModified**.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parameters

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The Parameters parameter filters the results by the parameters that were used. You can only use this parameter with the Cmdlets parameter (you can't use it by itself). You can specify multiple parameters separated by commas.

In the results of this cmdlet, this property is named **CmdletParameters**

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The ResultSize parameter specifies the maximum number of results to return. The default value is 1000.

The maximum results to return is 250,000.

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

### -StartDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In the cloud-based service, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC). To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

In the results of this cmdlet, the date/time when the change was made (the cmdlet was run) is returned in the property named **RunDate**.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartIndex

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The StartIndex parameter specifies the position in the result set where the displayed results start.

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

### -UserIds

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Exchange Online Protection

The UserIds parameter filters the results by the user who made the change (who ran the cmdlet).

A typical value for this parameter is the user principal name (UPN; for example, helpdesk@contoso.com). But, updates that were made by system accounts without email addresses might use the Domain\\Username syntax (for example, NT AUTHORITY\SYSTEM (MSExchangeHMHost)).

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"User1","User2",..."UserN"`.

In the results of this cmdlet, this property is named **Caller**

```yaml
Type: MultiValuedProperty
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
