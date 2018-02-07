---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-MailboxExportRequest

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-MailboxExportRequest cmdlet to change export request options after the request has been created. You can use the Set-MailboxExportRequest cmdlet to recover from failed export requests.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Set-MailboxExportRequest cmdlet to change export request options after the request has been created. You can use the Set-MailboxExportRequest cmdlet to recover from failed export requests.

This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-MailboxExportRequest cmdlet to change export request options after the request has been created. You can use the Set-MailboxExportRequest cmdlet to recover from failed export requests.

This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups (https://technet.microsoft.com/library/jj657480.aspx).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Set-MailboxExportRequest [-Identity] <MailboxExportRequestIdParameter> [-AcceptLargeDataLoss]
 [-BadItemLimit <Unlimited>] [-BatchName <String>] [-Confirm] [-DomainController <Fqdn>]
 [-Priority <Normal | High>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Set-MailboxExportRequest [-Identity] <MailboxExportRequestIdParameter> [-RehomeRequest] [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [-RequestExpiryInterval <Unlimited>] [<CommonParameters>]
```

### Set1
```
Set-MailboxExportRequest [-Identity] <MailboxExportRequestIdParameter> [-AcceptLargeDataLoss]
 [-BadItemLimit <Unlimited>] [-BatchName <String>] [-CompletedRequestAgeLimit <Unlimited>] [-Confirm]
 [-DomainController <Fqdn>] [-InternalFlags <InternalMrsFlag[]>] [-LargeItemLimit <Unlimited>]
 [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>]
 [-RemoteCredential <PSCredential>] [-RemoteHostName <Fqdn>] [-SkipMerging <SkippableMergeComponent[]>]
 [-WhatIf] [-RequestExpiryInterval <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can pipeline the Set-MailboxExportRequest cmdlet from the Get-MailboxExportRequest cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Import Export" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You can pipeline the Set-MailboxExportRequest cmdlet from the Get-MailboxExportRequest cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Import Export" entry in the Recipients Permissions topic.

!!! Exchange Server 2016

You can pipeline the Set-MailboxExportRequest cmdlet from the Get-MailboxExportRequest cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-MailboxExportRequest -Identity "Ayla\MailboxExport1\" -BadItemLimit 10
```

This example changes the second export request Ayla\\MailboxExport1 to accept up to 10 corrupt mailbox items.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-MailboxExportRequest -Identity "Ayla\MailboxExport1\" -BadItemLimit 10
```

This example changes the second export request Ayla\\MailboxExport1 to accept up to 10 corrupt mailbox items.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-MailboxExportRequest -Identity "Ayla\MailboxExport1\" -BadItemLimit 10
```

This example changes the second export request Ayla\\MailboxExport1 to accept up to 10 corrupt mailbox items.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the export request. By default, export requests are named \<alias\>\\MailboxExportX (where X = 0-9). If you specify a name for the export request, use the following syntax: \<alias\>\\\<name\>.

```yaml
Type: MailboxExportRequestIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AcceptLargeDataLoss
!!! Exchange Server 2010

The AcceptLargeDataLoss parameter specifies that a large amount of data loss is acceptable if the BadItemLimit is set to 51 or higher. Items are considered corrupted if the item can't be read from the source database or can't be written to the target database. Corrupted items won't be available in the destination mailbox or .pst file.



!!! Exchange Server 2013, Exchange Server 2016

The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You need to use this switch if you set either the BadItemLimit or LargeItemLimit parameters to a value of 51 or higher. Otherwise, the command will fail.



```yaml
Type: SwitchParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit
!!! Exchange Server 2010

The BadItemLimit parameter specifies the number of bad items to skip if the request encounters corruption in the mailbox. Use 0 to not skip bad items. The valid input range for this parameter is from 0 through 2147483647. The default value is 0. We recommend that you keep the default value 0 and only change the BadItemLimit parameter value if the request fails.

If you set the BadItemLimit parameter to more than 50, the command fails, and you receive a warning stating: "Please confirm your intention to accept a large amount of data loss by specifying AcceptLargeDataLoss." If you receive this warning, you need to run the command again, this time using the AcceptLargeDataLoss parameter. No further warnings appear, and any corrupted items aren't available after the process is complete.



!!! Exchange Server 2013, Exchange Server 2016

The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.



```yaml
Type: Unlimited
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies the name of the batch.

```yaml
Type: String
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
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

### -Priority
!!! Exchange Server 2010

The Priority parameter specifies the position in the request queue in which to put this request for processing. Requests are processed in order, based on server health, status, priority, and last update time.



!!! Exchange Server 2013

The Priority parameter specifies the order in which this request is processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time.



!!! Exchange Server 2016

The Priority parameter specifies the order in which the request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. Valid priority values are:

- Lowest

- Lower

- Low

- Normal: This is the default value.

- High

- Higher

- Highest

- Emergency



```yaml
Type: Normal | High
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RehomeRequest
The RehomeRequest parameter specifies to the Microsoft Exchange Mailbox Replication service (MRS) that the request needs to be moved to the same database as the mailbox that's being exported. This parameter is used primarily for debugging purposes.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompletedRequestAgeLimit
The CompletedRequestAgeLimit parameter specifies how long the request will be kept after it has completed before being automatically removed. The default value is 30 days.

```yaml
Type: Unlimited
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalFlags
The InternalFlags parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes.

```yaml
Type: InternalMrsFlag[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit
!!! Exchange Server 2013

The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2013 Message size limits

- Exchange Online Exchange Online Limits (https://go.microsoft.com/fwlink/p/?LinkId=524926)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.



!!! Exchange Server 2016

The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: Message size limits in Exchange 2016 (https://technet.microsoft.com/library/bb124345.aspx)

- Exchange Online: Exchange Online Limits (https://go.microsoft.com/fwlink/p/?LinkId=524926)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.



```yaml
Type: Unlimited
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCredential
This parameter is reserved for internal Microsoft use.

```yaml
Type: PSCredential
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteHostName
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging
The SkipMerging parameter specifies steps in the export that should be skipped. This parameter is used primarily for debugging purposes.

```yaml
Type: SkippableMergeComponent[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestExpiryInterval
The RequestExpiryInterval parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter:

- The completed request is automatically removed based on the CompletedRequestAgeLimit parameter value.

- If the request fails, you need to manually remove it by using the corresponding Remove-\*Request cmdlet.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

When you use the value Unlimited, the completed request isn't automatically removed.

```yaml
Type: Unlimited
Parameter Sets: Set2, Set1
Aliases:
Applicable: Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/5a064940-f8c1-4ee7-822a-a6cfe483081e.aspx)

