---
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPresenceManagementState

## SYNOPSIS
Use the Set-CsPresenceManagementState cmdlet to modify the settings of the Skype for Business Server 2015 management state.
The management state settings determine the batching and timing of Skype for Business Server 2015 notifications.

## SYNTAX

```
Set-CsPresenceManagementState [[-Fqdn] <Fqdn>] [-Confirm] [-Force] [-ManualOverride <Boolean>]
 [-MaxPublishersPerBatch <UInt32>] [-MaxRemotePublishersPerBatch <UInt32>]
 [-NotificationBatchInterval <UInt32>] [-NotificationBatchSize <UInt32>] [-WhatIf]
 [-LimitedNotificationMode <Boolean>] [-MaxHttpMessageSizeKb <UInt32>] [-MaxRemoteQueueThreadCount <UInt32>]
 [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

This example set the NotificationBatchSize to 50 on the pool or computer named "atl-mcs-001.litwareinc.com".

Set-CsPresenceManagementState -Fqdn "atl-mcs-001.litwareinc.com" -NotificationBatchSize 50

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force parameter is not implemented for this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn
Specifies the computer or pool to modify.
The computer or pool should be referenced by using its fully qualified domain name (FQDN).
For example: -Fqdn "atl-mcs-001.litwareinc.com".
If FQDN is not specified, the settings for the local machine will be modified.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManualOverride
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPublishersPerBatch
Specifies a general guideline for the number of publishers that are collected before notifications are sent.
Reducing the MaxPublishersPerBatch value reduces database pressure at the expense of longer notification wait time after publishing.
Increasing this value reduces notification wait times during periods of high volume, but increases database and network traffic.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRemotePublishersPerBatch
PARAMVALUE: UInt32

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationBatchInterval
Specifies the time in seconds between notification batches.
Reducing the NotificationBatchInterval value increases database and network traffic but improves notification wait times.
Increasing the value increases notification wait times.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationBatchSize
Specifies the maximum number of messages to send in one batch notification.
This parameters should only be changed if messages are exceeding a maximum message size parameter in your organization.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LimitedNotificationMode
{{Fill LimitedNotificationMode Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxHttpMessageSizeKb
{{Fill MaxHttpMessageSizeKb Description}}

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRemoteQueueThreadCount
{{Fill MaxRemoteQueueThreadCount Description}}

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsPresenceManagementState]()

[Online Version](http://technet.microsoft.com/EN-US/library/dbb6a81d-ebff-486e-b83f-4e73365a193c(OCS.16).aspx)

