---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-managedcontentsettings
schema: 2.0.0
title: New-ManagedContentSettings
---

# New-ManagedContentSettings

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the New-ManagedContentSettings cmdlet to create managed content settings for managed folders.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-ManagedContentSettings [-Name] <String> -FolderName <ELCFolderIdParameter> -MessageClass <String>
 [-AddressForJournaling <RecipientIdParameter>]
 [-AgeLimitForRetention <EnhancedTimeSpan>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-JournalingEnabled <Boolean>]
 [-LabelForJournaling <String>]
 [-MessageFormatForJournaling <JournalingFormat>]
 [-MoveToDestinationFolder <ELCFolderIdParameter>]
 [-RetentionAction <RetentionAction>]
 [-RetentionEnabled <Boolean>]
 [-TriggerForRetention <RetentionDateType>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Managed content settings are settings that you associate with managed folders to control the lifespan of items in users' mailboxes. Lifespan is controlled in the following ways:

- By controlling content retention and removing content that's no longer needed.
- By automatically journaling important content to a separate storage location outside the mailbox.

For more information about managed content settings, see [Messaging Records Management](https://learn.microsoft.com/previous-versions/office/exchange-server-2010/bb123507(v=exchg.141)).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ManagedContentSettings -Name "CS-Exec-DeletedItems" -FolderName "Exec-DeletedItems" -MessageClass * -RetentionEnabled $true -RetentionAction DeleteAndAllowRecovery -AgeLimitForRetention 30.00:00:00 -TriggerForRetention WhenDelivered
```

This example creates managed content settings for the managed default folder Exec-DeletedItems. When added to a managed folder mailbox policy and applied to a mailbox, items in the Deleted Items folder will be permanently deleted 30 days from the date of delivery.

### Example 2
```powershell
New-ManagedContentSettings -Name CS-Exec-Calendar -FolderName Exec-Calendar -MessageClass Calendar -RetentionEnabled $true -RetentionAction MoveToDeletedItems -AgeLimitForRetention 180
```

This example creates managed content settings CS-Exec-Calendar for the Calendar message class. The managed content settings apply to the default folder Calendar. Retention is enabled, and items are moved to the Deleted Items folder after 180 days.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010

The Name parameter specifies a unique name for the managed content settings.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderName

> Applicable: Exchange Server 2010

The FolderName parameter specifies the name or GUID of the managed folder to which the managed content settings apply.

```yaml
Type: ELCFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageClass

> Applicable: Exchange Server 2010

The MessageClass parameter specifies the message type to which any expiration and journaling configuration settings within these content settings apply.

The parameter value can be a well-known message type such as Calendar items, a specific message class such as IPM.NOTE.SMIME, or a custom message class. The following well-known message types can be used:

- For All mailbox content, use the value \*.
- For the Calendar items message type, use the value IPM.Appointment\*.
- For the Contacts message type, use the value IPM.Contact\*.
- For the Documents message type, use the value IPM.Document\*.
- For the Faxes message type, use the value IPM.Note.Microsoft.Fax.
- For the Journalitems message type, use the value IPM.Activity.
- For the Meeting requests, responses, and cancellations message type, use the value IPM.Schedule\*.
- For the Notes message type, use the value IPM.StickyNote.
- For the Posts message type, use the value IPM.Post.
- For the RSS items message type, use the value IPM.Post.RSS.
- For the Tasks message type, use the value IPM.Task\*.
- For the Voice mail message type, use the value IPM.Note.Microsoft.Voicemail\*.

Valid parameter values for custom message classes include:

- A specific message class (for example, IPM.NOTE).
- The asterisk (\*) wildcard character, which indicates that the content settings apply to all message classes.
- A specific message class that has the asterisk wildcard character. The asterisk wildcard character must appear as the last character in the message class. For example, IPM.NOTE\* (includes IPM.NOTE and all subclasses) or IPM.NOTE.\* (includes the subclasses for IPM.NOTE but not IPM.NOTE itself). \*.NOTE and IPM.\*.NOTE aren't valid values.

**Notes**:

- When wildcard characters are used, these policies apply only to message classes that don't have a specific content setting. Therefore, IPM.NOTE.SMIME overrides IPM.NOTE.\*.
- Specific settings supersede general settings, for example, Voicemail supersedes AllMailboxContent.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddressForJournaling

> Applicable: Exchange Server 2010

The AddressForJournaling parameter specifies the journaling recipient where journaled messages are sent. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

This parameter is required if the JournalingEnabled parameter is set to $true.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgeLimitForRetention

> Applicable: Exchange Server 2010

The AgeLimitForRetention parameter specifies the age at which retention is enforced on an item. The age limit corresponds to the number of days from the date the item was delivered, or the date an item was created if it wasn't delivered. If this parameter isn't present and the RetentionEnabled parameter is set to $true, an error is returned.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010

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

### -JournalingEnabled

> Applicable: Exchange Server 2010

The JournalingEnabled parameter specifies that journaling is enabled when set to $true.

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

### -LabelForJournaling

> Applicable: Exchange Server 2010

The LabelForJournaling parameter specifies a label that's attached to an item. This label is used by the destination store to determine the content of the item and enforce the appropriate policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageFormatForJournaling

> Applicable: Exchange Server 2010

The MessageFormatForJournaling parameter specifies the message format that an item should be journaled in. You can use the following values:

- UseMsg Outlook .msg format
- UseTnef Outlook MAPI format

```yaml
Type: JournalingFormat
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveToDestinationFolder

> Applicable: Exchange Server 2010

The MoveToDestinationFolder parameter specifies the destination folder for a move action.

The destination folder must be an existing managed custom folder. If it isn't, an error is returned. If the MoveToDestinationFolder parameter isn't present, and the value of the RetentionAction parameter is MoveToFolder, an error is returned.

```yaml
Type: ELCFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionAction

> Applicable: Exchange Server 2010

The RetentionAction parameter specifies one of the following actions:

- Mark as past retention limit
- Move to a managed custom folder
- Move to the Deleted Items folder
- Delete and allow recovery
- Permanently delete

If this parameter isn't present and the RetentionEnabled parameter is set to $true, an error is returned.

```yaml
Type: RetentionAction
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionEnabled

> Applicable: Exchange Server 2010

The RetentionEnabled parameter specifies that retention is enabled when set to $true.

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

### -TriggerForRetention

> Applicable: Exchange Server 2010

The TriggerForRetention parameter specifies the date that's considered as the start date for the retention period. An item can reach its retention limit a specific number of days after the item was delivered or after it was moved to a folder.

Valid values include:

- WhenDelivered
- WhenMoved

This value corresponds to the 0x4 bit of the msExchELCFlags attribute in Active Directory. The flag is set to $true if the item will expire based on the date it was moved and $false if the item will expire based on the delivery date.

If this parameter isn't present and the RetentionEnabled parameter is set to $true, an error is returned.

```yaml
Type: RetentionDateType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
