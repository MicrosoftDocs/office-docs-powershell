---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsPersistentChatComplianceConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Creates a new collection of Persistent Chat compliance configuration settings at the site or the service scope.
Persistent Chat compliance enables administrators to maintain an archive of Persistent Chat items and activities including: new messages; new events (for example, a user entering or existing a chat room); file uploads and downloads; and searches run against the chat history.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new collection of Persistent Chat compliance configuration settings at the site or the service scope.
Persistent Chat compliance enables administrators to maintain an archive of Persistent Chat items and activities including: new messages; new events (for example, a user entering or existing a chat room); file uploads and downloads; and searches run against the chat history.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsPersistentChatComplianceConfiguration [-Identity] <XdsIdentity> [-AdapterName <String>]
 [-AdapterOutputDirectory <String>] [-AdapterType <String>] [-AddChatRoomDetails <Boolean>]
 [-AddUserDetails <Boolean>] [-Confirm] [-CreateFileAttachmentsManifest <Boolean>]
 [-CustomConfiguration <String>] [-Force] [-InMemory] [-OneChatRoomPerOutputFile <Boolean>]
 [-RunInterval <TimeSpan>] [-WhatIf] [<CommonParameters>]
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

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsPersistentChatComplianceConfiguration"}

Lync Server Control Panel: The functions carried out by the New-CsPersistentChatComplianceConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Many organizations (including organizations involved in health care and organizations involved in the financial industry) are required to maintain archives of all their electronic communications; this includes conversations that might take place using the Persistent Chat service.
Skype for Business Server 2015 allows you to create a separate compliance database that keeps a detailed of archive of everything that happens in your Persistent Chat chat rooms.
Persistent Chat compliance can be enabled or disabled at the site scope or at the service scope (that is, compliance can be enabled or disabled for a given Persistent Chat pool).
In addition, Persistent Chat compliance can only be managed using the Windows PowerShell command-line interface; there are no options available in the Skype for Business Server Control Panel for managing Persistent Chat compliance.

Skype for Business Server Control Panel: The functions carried out by the New-CsPersistentChatComplianceConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new collection of Persistent Chat compliance configuration settings for the Redmond site.
In this example, both the AddUserDetails and the AddChatRoomDetails properties are set to True ($True).

New-CsPersistentChatComplianceConfiguration -Identity "site:Redmond" -AddUserDetails $True -AddChatRoomDetails $True

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new collection of Persistent Chat compliance configuration settings for the Redmond site.
In this example, both the AddUserDetails and the AddChatRoomDetails properties are set to True ($True).

New-CsPersistentChatComplianceConfiguration -Identity "site:Redmond" -AddUserDetails $True -AddChatRoomDetails $True

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also demonstrates how to create a new collection of Persistent Chat compliance configuration settings for the Redmond site.
In this example, the RunInterval property is set to 30 minutes; that is, 00 hours : 30 minutes : 00 seconds.

New-CsPersistentChatComplianceConfiguration -Identity "site:Redmond" -RunInterval "00:30:00"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also demonstrates how to create a new collection of Persistent Chat compliance configuration settings for the Redmond site.
In this example, the RunInterval property is set to 30 minutes; that is, 00 hours : 30 minutes : 00 seconds.

New-CsPersistentChatComplianceConfiguration -Identity "site:Redmond" -RunInterval "00:30:00"

## PARAMETERS

### -Identity
Unique identifier for the new Persistent Chat compliance settings being created.
New compliance settings can be created at either the site or the service scope (for the Persistent Chat Server service, only).
To create new settings at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To create new settings at the service scope, use syntax like this:

-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdapterName
Name of the Persistent Chat adapters used by the compliance settings.
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

Specifies the format that compliance information will be saved to.
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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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
For example, to specify a RunInterval of 30 minutes (the default value) use this syntax:

-RunInterval 00:30:00

The RunInterval can be set to any value between 1 minute (00:01.00) and 30 days (30.00:00:00), inclusive.
The default value is 15 minutes (00:15:00).

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
None New-CsPersistentChatComplianceConfiguration does not accept pipelined input.

###  
None.
The New-CsPersistentChatComplianceConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsPersistentChatComplianceConfiguration creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

###  
The New-CsPersistentChatComplianceConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatComplianceConfiguration]()

[Remove-CsPersistentChatComplianceConfiguration]()

[Set-CsPersistentChatComplianceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/a61b76a9-0e2b-4f64-b2fa-cddadc15451c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/a61b76a9-0e2b-4f64-b2fa-cddadc15451c(OCS.16).aspx)

