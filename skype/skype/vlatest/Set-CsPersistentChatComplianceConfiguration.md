---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPersistentChatComplianceConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Modifies an existing collection of Persistent Chat compliance configuration settings.
Persistent Chat compliance enables administrators to maintain an archive of Persistent Chat items and activities including: new messages; new events (for example, a user entering or existing a chat room); file uploads and downloads; and searches run against the chat history.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Modifies an existing collection of Persistent Chat compliance configuration settings.
Persistent Chat compliance enables administrators to maintain an archive of Persistent Chat items and activities including: new messages; new events (for example, a user entering or existing a chat room); file uploads and downloads; and searches run against the chat history.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Set-CsPersistentChatComplianceConfiguration [[-Identity] <XdsIdentity>] [-AdapterName <String>]
 [-AdapterOutputDirectory <String>] [-AdapterType <String>] [-AddChatRoomDetails <Boolean>]
 [-AddUserDetails <Boolean>] [-Confirm] [-CreateFileAttachmentsManifest <Boolean>]
 [-CustomConfiguration <String>] [-Force] [-OneChatRoomPerOutputFile <Boolean>] [-RunInterval <TimeSpan>]
 [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsPersistentChatComplianceConfiguration [-AdapterName <String>] [-AdapterOutputDirectory <String>]
 [-AdapterType <String>] [-AddChatRoomDetails <Boolean>] [-AddUserDetails <Boolean>] [-Confirm]
 [-CreateFileAttachmentsManifest <Boolean>] [-CustomConfiguration <String>] [-Force] [-Instance <PSObject>]
 [-OneChatRoomPerOutputFile <Boolean>] [-RunInterval <TimeSpan>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Many organizations (including organizations involved in health care and organizations involved in the financial industry) are required to maintain archives of all their electronic communications; this includes conversations that might take place using the Persistent Chat service.
Lync Server allows you to create a separate compliance database that keeps a detailed of archive of everything that happens in your Persistent Chat chat rooms.
Persistent Chat compliance can be enabled or disabled at the site scope or at the service scope (that is, compliance can be enabled or disabled for a given Persistent Chat pool).
In addition, Persistent Chat compliance can only be managed using Windows PowerShell; there are no options available in the Lync Server 2013 Preview Control Panel for managing Persistent Chat compliance.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPersistentChatComplianceConfiguration"}

Lync Server Control Panel: The functions carried out by the Set-CsPersistentChatComplianceConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Many organizations (including organizations involved in health care and organizations involved in the financial industry) are required to maintain archives of all their electronic communications; this includes conversations that might take place using the Persistent Chat service.
Lync Server allows you to create a separate compliance database that keeps a detailed of archive of everything that happens in your Persistent Chat chat rooms.
Persistent Chat compliance can be enabled or disabled at the site scope or at the service scope (that is, compliance can be enabled or disabled for a given Persistent Chat pool).
In addition, Persistent Chat compliance can only be managed using Windows PowerShell command-line interface; there are no options available in the Skype for Business Server Control Panel for managing Persistent Chat compliance.

Skype for Business Server Control Panel: The functions carried out by the Set-CsPersistentChatComplianceConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 sets the RunInterval property of the global collection of Persistent Chat compliance configuration settings to 10 minutes: 00 hours : 10 minutes : 00 seconds.

Set-CsPersistentChatComplianceConfiguration -Identity "global" -RunInterval "00:10:00"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 sets the RunInterval property of the global collection of Persistent Chat compliance configuration settings to 10 minutes: 00 hours : 10 minutes : 00 seconds.

Set-CsPersistentChatComplianceConfiguration -Identity "global" -RunInterval "00:10:00"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the RunInterval property for all the Persistent Chat compliance configuration settings currently in use in the organization is set to 10 minutes.
To do this, Get-CsPersistentChatComplianceConfiguration is first called without any parameters in order to return a collection of all the compliance settings.
This collection is then piped to Set-CsPersistentChatComplianceConfiguration, which changes the value of the RunInterval property for each item in the collection to 10 minutes.

Get-CsPersistentChatComplianceConfiguration | Set-CsPersistentChatComplianceConfiguration -RunInterval "00:10:00"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the RunInterval property for all the Persistent Chat compliance configuration settings currently in use in the organization is set to 10 minutes.
To do this, the Get-CsPersistentChatComplianceConfiguration cmdlet is first called without any parameters in order to return a collection of all the compliance settings.
This collection is then piped to the Set-CsPersistentChatComplianceConfiguration cmdlet, which changes the value of the RunInterval property for each item in the collection to 10 minutes.

Get-CsPersistentChatComplianceConfiguration | Set-CsPersistentChatComplianceConfiguration -RunInterval "00:10:00"

## PARAMETERS

### -AdapterName
Name of the Persistent Chat adapters.
Adapters are third-party products that convert the data in the compliance database to a specific format.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdapterOutputDirectory
Full path to the folder where adapter data is stored.
You must have a separate folder for each adapter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdapterType
**Below Content Applies To:** Lync Server 2013

Specifies the format that compliance will be saved to.
Lync Server 2013 Preview supports the following adapter types (and thus the following compliance formats):

* Akonix
* Assentor
* Facetime
* XML

If you do not specify an adapter type Persistent Chat will not save compliance data.



**Below Content Applies To:** Skype for Business Server 2015

Specifies the fully qualified name of a .Net managed type that implements the Microsoft.Rtc.Internal.Chat.Server.Compliance.IComplianceAdapter interface.
This adapter is supplied by a third-party or can be set to the internal XML adapter, "Microsoft.Rtc.Internal.Chat.Server.Compliance.XmlAdapter,compliance".

If you do not specify an adapter type Persistent Chat will not save compliance data.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddChatRoomDetails
**Below Content Applies To:** Lync Server 2013

When set to True, additional details about each chat room are recorded in the non-compliance database.
This has the ability to greatly increase the size of that database.

The default value is False.



**Below Content Applies To:** Skype for Business Server 2015

When set to True, additional details about each chat room are provided to the adapter.
This has the potential to greatly increase the size of the compliance data.

The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddUserDetails
**Below Content Applies To:** Lync Server 2013

When set to True, additional details about each chat room user are recorded in the non-compliance database.
This has the ability to greatly increase the size of that database.

The default value is False.



**Below Content Applies To:** Skype for Business Server 2015

When set to True, additional details about each chat room user are provided to the adapter.
This has the potential to greatly increase the size of the compliance data.

The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateFileAttachmentsManifest
**Below Content Applies To:** Lync Server 2013

When set to True, additional output files will be created to track file transfers within chat rooms.
These files will have the file extension .ATTACH.



**Below Content Applies To:** Skype for Business Server 2015

When set to True, additional output files will be created to track file transfers within chat rooms.
These files will have the file extension .ATTACH and are placed in the location specified by the AdapterOutputDirectory.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomConfiguration
**Below Content Applies To:** Lync Server 2013

XSLT transform script that enables Persistent Chat to save compliance data in a custom format of your design.
This property should only be configured if you are using one of these scripts.



**Below Content Applies To:** Skype for Business Server 2015

XSLT transform script that enables Persistent Chat to save compliance data in a custom format of your design.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique identifier for the Persistent Chat compliance settings to be modified.
To modify the global collection, use this syntax:

-Identity "global"

To modify a collection of settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To modify a collection configured at the service scope, use syntax like this:

-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"

If this parameter is not included then Set-CsPersistentChatComplianceConfiguration will modify the global collection.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the Persistent Chat compliance settings to be modified.
To modify the global collection, use this syntax:

-Identity "global"

To modify a collection of settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To modify a collection configured at the service scope, use syntax like this:

-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"

If this parameter is not included then the Set-CsPersistentChatComplianceConfiguration cmdlet will modify the global collection.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -OneChatRoomPerOutputFile
When set to True, separate reports are created for each chat room.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunInterval
Amount of time that the server waits before generating the next output file.
The RunInterval must be specified using the format days.hours:minutes:seconds.
For example, to specify a RunInterval of 15 minutes (the default value) use this syntax:

-RunInterval 00:15:00

The RunInterval can be set to any value between 1 minute (00:01.00) and 30 days (30.00:00:00), inclusive.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Set-CsPersistentChatComplianceConfiguration accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

###  
The Set-CsPersistentChatComplianceConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

## OUTPUTS

###  
None.
Instead, Set-CsPersistentChatComplianceConfiguration modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

###  
None.
Instead, the Set-CsPersistentChatComplianceConfiguration cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatComplianceConfiguration]()

[New-CsPersistentChatComplianceConfiguration]()

[Remove-CsPersistentChatComplianceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/615625f8-574a-4832-8d3f-26721cd124d8(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/615625f8-574a-4832-8d3f-26721cd124d8(OCS.16).aspx)

