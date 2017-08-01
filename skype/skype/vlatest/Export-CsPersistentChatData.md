---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Export-CsPersistentChatData

## SYNOPSIS
Exports data from a Persistent Chat database.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### AsBytes
```
Export-CsPersistentChatData -DBInstance <String> [-AsBytes] [-DBName <String>] [-DisableExportedNodes]
 [-Level <ExportLevel>] [-Report <String>] [-Scope <System.Collections.Generic.List`1[System.String]>]
 [-StartDate <DateTime>] [<CommonParameters>]
```

### FileName
```
Export-CsPersistentChatData -DBInstance <String> [-DBName <String>] [-DisableExportedNodes]
 [-FileName <String>] [-Level <ExportLevel>] [-Report <String>]
 [-Scope <System.Collections.Generic.List`1[System.String]>] [-StartDate <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

If you are currently running Lync Server 2010, you can migrate your current Group Chat implementation by using the Export-CsPersistentChatData cmdlet to export your existing Group Chat configuration settings, then use the Import-CsPersistentChatData cmdlet to migrate that information to Skype for Business Server and the Persistent Chat service.
Note that the Export-CsPersistentChatData cmdlet gives you the option of importing all your Group Chat settings and data or only a portion of your Group Chat settings and data; for example, you can export (and then import) your Group Chat categories and chat rooms without exporting all the content associated with those categories and chat rooms.

Although primarily intended for migration purposes, the CsPersistentChatData cmdlets can also be used to manage Persistent Chat data on Skype for Business Server.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Export-CsPersistentChatData"}`

The functions carried out by the Export-CsPersistentChatData cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Export-CsPersistentChatData -DBInstance "atl-sql-001.litwareinc.com\rtc" -FileName "C:\Logs\PersistentChatData.zip"
```

The command shown in Example 1 exports Persistent Chat data from the Persistent Chat database located on the server atl-sql-001.litwareinc.com; the exported data will be stored in the file C:\Logs\PersistentChatData.zip.
Because the Level parameter was not specified, the Export-CsPersistentChatData cmdlet will do a full export of the Persistent Chat information.


## PARAMETERS

### -DBInstance
Fully qualified domain name and name of the SQL Server instance where the Skype for Business Server 2015 Persistent Chat database is located.
For example, this syntax specifies the database found in the RTC database instance on the server atl-sql-001.litwareinc.com:

`-DBInstance "atl-sql-001.litwareinc.com\rtc"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsBytes
Returns Persistent Chat information as a byte array; the returned data must then be stored in a variable in order to be used by the Import-CsPersistentChatData cmdlet.
You cannot use both AsBytes and FileName in the same command.

```yaml
Type: SwitchParameter
Parameter Sets: AsBytes
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DBName
SQL instance name of the Persistent Chat database.

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

### -DisableExportedNodes
When present, all exported categories and chat rooms will be disabled when the export is complete.

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

### -FileName
Full path to the .ZIP file that the Export-CsPersistentChatData cmdlet will create; this file will contain the exported user data.
For example:

`-FileName "C:\Logs\PersistentChatData.zip"`

```yaml
Type: String
Parameter Sets: FileName
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Level
Enables you to specify which Persistent Chat information will be exported.
Allowed values are:

* All
* User
* Category
* RoomDirectory
* Content

The default value is All, which means that all the Persistent Chat information will be exported.

```yaml
Type: ExportLevel
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Full path for the log file created when the cmdlet runs.
For example:

`-Report "C:\Logs\ExportPersistentChat.html"`

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

### -Scope
Enables you to export data for a specified set of categories (and their corresponding chat rooms).
By default all Categories are exported.

```yaml
Type: System.Collections.Generic.List`1[System.String]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
Beginning date for the time period for which Persistent Chat chat room content should be exported.
For example:

`-StartDate "1/1/2018"`

This parameter is valid only when they Level is set to RoomDirectory.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
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

### None


## OUTPUTS

###  
The Export-CsPersistentChatData cmdlet creates .ZIP files.


## NOTES


## RELATED LINKS