---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Import-CsPersistentChatData

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Enables administrators to import data exported from a Microsoft Lync Server 2010 Group Chat database into a Microsoft Lync Server 2013 Preview Persistent Chat database.
This data must have previously been exported from the Group Chat database by using the Export-CsPersistentChatData cmdlet.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Enables administrators to import data exported from a Microsoft Lync Server 2010 Group Chat database into a Skype for Business Server 2015 Persistent Chat database.
This data must have previously been exported from the Group Chat database by using the Export-CsPersistentChatData cmdlet.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### ByteInput
```
Import-CsPersistentChatData -ByteInput <Byte[]> -DBInstance <String> [-Confirm] [-Report <String>] [-WhatIf]
 [<CommonParameters>]
```

### FileName
```
Import-CsPersistentChatData -DBInstance <String> -FileName <String> [-Confirm] [-Report <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

If you are currently running Lync Server 2010, you can migrate your current Group Chat implementation by using the Export-CsPersistentChatData cmdlet to export your existing Group Chat configuration settings, then use the Import-CsPersistentChatData cmdlet to migrate that information to Lync Server 2013 and the Persistent Chat service.
Note that the Export-CsPersistentChatData cmdlet gives you the option of importing all your Group Chat settings and data or only a portion of your Group Chat settings and data; for example, you can export (and then import) your Group Chat categories and chat rooms without exporting all the content associated with those categories and chat rooms.

Although primarily intended for migration purposes, the CsPersistentChatData cmdlets can also be used to manage Persistent Chat data on Lync Server 2013 Preview.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Import-CsPersistentChatData"}

Lync Server Control Panel: The functions carried out by the Import-CsPersistentChatData cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

If you are currently running Lync Server 2010, you can migrate your current Group Chat implementation by using the Export-CsPersistentChatData cmdlet to export your existing Group Chat configuration settings, then use the Import-CsPersistentChatData cmdlet to migrate that information to Lync Server 2013 and the Persistent Chat service.
Note that the Export-CsPersistentChatData cmdlet gives you the option of importing all your Group Chat settings and data or only a portion of your Group Chat settings and data; for example, you can export (and then import) your Group Chat categories and chat rooms without exporting all the content associated with those categories and chat rooms.

Although primarily intended for migration purposes, the CsPersistentChatData cmdlets can also be used to manage Persistent Chat data on Skype for Business Server 2015.

Skype for Business Server Control Panel: The functions carried out by the Import-CsPersistentChatData cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown on Example 1 reads exported Persistent Chat data from the file C:\Logs\PersistentChatExport.xml and then adds that data to the Persistent Chat database atl-sql-001.litwareinc.com\rtc (where "atl-sql-001.litwareinc.com" is the fully qualified domain name of the SQL Server computer and "rtc" is the SQL Server database instance).

Import-CsPersistentChatData -DBInstance "atl-sql-001.litwareinc.com\rtc" -FileName "C:\Logs\PersistentChatExport.zip"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown on Example 1 reads exported Persistent Chat data from the file C:\Logs\PersistentChatExport.xml and then adds that data to the Persistent Chat database atl-sql-001.litwareinc.com\rtc (where "atl-sql-001.litwareinc.com" is the fully qualified domain name of the SQL Server computer and "rtc" is the SQL Server database instance).

Import-CsPersistentChatData -DBInstance "atl-sql-001.litwareinc.com\rtc" -FileName "C:\Logs\PersistentChatExport.zip"

## PARAMETERS

### -ByteInput
When specified, data is imported as a byte array rather than an XML file.

```yaml
Type: Byte[]
Parameter Sets: ByteInput
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DBInstance
**Below Content Applies To:** Lync Server 2013

Fully qualified domain name and name of the SQL Server instance where the Lync Server 2013 Preview Persistent Chat database is located.
For example, this syntax specifies the database found in the RTC database instance on the server atl-sql-001.litwareinc.com:

-DBInstance "atl-sql-001.litwareinc.com\rtc"



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name and name of the SQL Server instance where the Skype for Business Server 2015 Persistent Chat database is located.
For example, this syntax specifies the database found in the RTC database instance on the server atl-sql-001.litwareinc.com:

-DBInstance "atl-sql-001.litwareinc.com\rtc"



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

### -FileName
Full path to the XML file being imported.
For example:

-FileName "C:\Logs\PersistentChatExport.xml"

```yaml
Type: String
Parameter Sets: FileName
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

-Report "C:\Logs\PersistentChatExport.html"

If this file already exists, it will be overwritten when you run the cmdlet.

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
None.
Import-CsPersistentChatData does not accept pipelined input.

###  
None.
The Import-CsPersistentChatData cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/17151a25-5dea-498a-93d5-fed3da7d3fa5(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/17151a25-5dea-498a-93d5-fed3da7d3fa5(OCS.16).aspx)

