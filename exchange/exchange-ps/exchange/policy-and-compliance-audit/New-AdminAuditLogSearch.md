---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-AdminAuditLogSearch
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# New-AdminAuditLogSearch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-AdminAuditLogSearch cmdlet to search the contents of the administrator audit log and send the results to one or more mailboxes that you specify.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-AdminAuditLogSearch [ -EndDate <ExDateTime>
 -StartDate <ExDateTime> -StatusMailRecipients <MultiValuedProperty> [-Cmdlets <MultiValuedProperty>]
 [-Confirm] [-DomainController <Fqdn>] [-Name <String>] [-ObjectIds <MultiValuedProperty>]
 [-Parameters <MultiValuedProperty>] [-UserIds <MultiValuedProperty>] [-WhatIf]
 [-ExternalAccess <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
After the New-AdminAuditLogSearch cmdlet is run, the report is delivered to the mailboxes you specify within 15 minutes. The log is included as an XML attachment on the report email message. The maximum size of the log that can be generated is 10 megabytes (MB).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-AdminAuditLogSearch -Name "Mailbox Quota Change Audit" -Cmdlets Set-Mailbox -Parameters UseDatabaseQuotaDefaults, ProhibitSendReceiveQuota, ProhibitSendQuota -StartDate 01/24/2015 -EndDate 02/12/2015 -StatusMailRecipients david@contoso.com, chris@contoso.com
```

This example finds all the administrator audit log entries that match the following criteria and sends the results to the david@contoso.com and chris@contoso.com SMTP addresses:

- Cmdlets:Set-Mailbox

- Parameters:UseDatabaseQuotaDefaults, ProhibitSendReceiveQuota, ProhibitSendQuota

- StartDate: 01/24/2015

- EndDate: 02/12/2015

### -------------------------- Example 2 --------------------------
```
New-AdminAuditLogSearch -ExternalAccess $true -StartDate 07/25/2015 -EndDate 10/24/2015 -StatusMailRecipients admin@contoso.com,pilarp@contoso.com -Name "Datacenter admin audit log"
```

This example returns entries in the administrator audit log of an Exchange Online organization for cmdlets run by Microsoft datacenter administrators between September 25, 2015 and October 24, 2015. The search results are sent to the admin@contoso.com and pilarp@contoso.com SMTP addresses and the text "Datacenter admin audit log" is added to the subject line of the message.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
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
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StatusMailRecipients
The StatusMailRecipients parameter specifies the recipients that should receive the administrator audit log report. The recipient must be a valid SMTP address.

If you want to specify more than one recipient, separate each SMTP address with a comma.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the administrator audit log search. The name is shown in the subject line of the audit log report email message.

If the name of the report contains spaces, enclose the name in quotation marks (").

```yaml
Type: String
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
The ObjectIds parameter specifies that only administrator audit log entries that contain the specified changed objects should be returned. This parameter accepts a variety of objects, such as mailboxes, aliases, Send connector names and so on.

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

### -WhatIf
This parameter doesn't work in the Office 365 Security & Compliance Center.

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

[Online Version](https://technet.microsoft.com/library/52a221e0-ded1-44dc-a626-ca264eca4113.aspx)
