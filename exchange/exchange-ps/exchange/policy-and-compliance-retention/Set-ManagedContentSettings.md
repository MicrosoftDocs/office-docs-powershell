---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2010
title: Set-ManagedContentSettings
schema: 2.0.0
---

# Set-ManagedContentSettings

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Set-ManagedContentSettings cmdlet to modify existing managed content settingsfor a managed folder.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ManagedContentSettings [-Identity] <ELCContentSettingsIdParameter>
 [-AddressForJournaling <RecipientIdParameter>] [-AgeLimitForRetention <EnhancedTimeSpan>] [-Confirm]
 [-DomainController <Fqdn>] [-JournalingEnabled <$true | $false>] [-LabelForJournaling <String>]
 [-MessageFormatForJournaling <UseMsg | UseTnef>] [-MoveToDestinationFolder <ELCFolderIdParameter>]
 [-Name <String>]
 [-RetentionAction <MoveToDeletedItems | MoveToFolder | DeleteAndAllowRecovery | PermanentlyDelete | MarkAsPastRetentionLimit | MoveToArchive>]
 [-RetentionEnabled <$true | $false>] [-TriggerForRetention <WhenDelivered | WhenMoved>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Managed content settings are settings that you apply to managed folders to control the lifespan of items in users' mailboxes. For more information about managed content settings, see Messaging Records Management.

Although the New-ManagedContentSettings cmdlet has the MessageClass parameter, the Set-ManagedContentSettings cmdlet doesn't. If you want to change the message type to which content settings apply, you must delete and then re-create the content settings. For more information about the MessageClass parameter, see New-ManagedContentSettings.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ManagedContentSettings -Identity MyManagedContentSettings -AddressForJournaling MySmtpAddress@contoso.com
```

This example specifies the address of the journaling recipient that's the destination of journaling operations.

## PARAMETERS

### -Identity
The Identity parameter specifies the name, distinguished name (DN), or GUID of the managed content settings.

```yaml
Type: ELCContentSettingsIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddressForJournaling
The AddressForJournaling parameter specifies the address of the journaling recipient that's the destination of journaling operations.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgeLimitForRetention
The AgeLimitForRetention parameter specifies the age at which retention is enforced on an item. The age limit corresponds to the number of days from the date that the item was delivered or the date that an item was created if it wasn't delivered.

If this parameter isn't present and the RetentionEnabled parameter is set to $true, an error is returned.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalingEnabled
The JournalingEnabled parameter specifies that journaling is enabled when it's set to $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LabelForJournaling
The LabelForJournaling parameter specifies a label that's attached to an item. This label is used by the destination store to determine the content of the item and enforce the appropriate policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageFormatForJournaling
The MessageFormatForJournaling parameter specifies the format in which an item should be journaled in. You can use the following values:

- UseMsg Microsoft Outlook .MSG format

- UseTnef Outlook MAPI format

```yaml
Type: UseMsg | UseTnef
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveToDestinationFolder
The MoveToDestinationFolder parameter specifies the name of the destination folder for a retention action.

```yaml
Type: ELCFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the managed content settings.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionAction
The RetentionAction parameter specifies one of the following actions to take when an item reaches its retention age limit, specified by the AgeLimitForRetention parameter. The following retention actions can be used:

- Mark as past retention limit

- Move to a managed custom folder

- Move to the Deleted Items folder

- Delete and allow recovery

- Permanently delete

If this parameter isn't present and the RetentionEnabled parameter is set to $true, an error is returned.

```yaml
Type: MoveToDeletedItems | MoveToFolder | DeleteAndAllowRecovery | PermanentlyDelete | MarkAsPastRetentionLimit | MoveToArchive
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionEnabled
The RetentionEnabled parameter specifies that retention is enabled when it's set to $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TriggerForRetention
The TriggerForRetention parameter specifies the date that's considered as the start date of the retention period. An item can reach its retention limit a specific number of days after the item was delivered or after it was moved into a specific folder.

Valid values include:

- WhenDelivered The item expires based on when it was delivered.

- WhenMoved The item expires based on the date it was moved.

If this parameter isn't present and the RetentionEnabled parameter is set to $true, an error is returned.

```yaml
Type: WhenDelivered | WhenMoved
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Aliases: wi
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/25a7d9d2-97f1-41aa-b24e-0c95cb0aded1.aspx)
