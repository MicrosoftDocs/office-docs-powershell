---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsArchivingServer

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables you to specify a new database location for one or more Archiving Servers.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to specify a new database location for one or more Archiving Servers.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsArchivingServer [[-Identity] <XdsGlobalRelativeIdentity>] [-ArchivingDatabase <String>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Archiving Servers provide a way for you to save complete transcripts of the instant messaging (IM) sessions that take place in your organization.
In some organizations, it can be useful to have copies of these IM sessions.
In other organizations, where records must be kept of all electronic communications, it can be mandatory to have copies of these IM sessions.

Archiving Server records the transcript of each IM session (as well as information about when the session took place, and who participated in the session) in a SQL Server database.
The location of this database must be specified when you install Archiving Server; in most cases, you will not need to change the location of that database.
However, if a hardware failure or other problem should occur, you can point Archiving Server to a new database by using the Set-CsArchivingServer cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsArchivingServer cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsArchivingServer"}

**Below Content Applies To:** Skype for Business Server 2015

Archiving Servers provide a way for you to save complete transcripts of the instant messaging (IM) sessions that take place in your organization.
In some organizations, it can be useful to have copies of these IM sessions.
In other organizations, where records must be kept of all electronic communications, it can be mandatory to have copies of these IM sessions.

Archiving Server records the transcript of each IM session (as well as information about when the session took place, and who participated in the session) in a SQL Server database.
The location of this database must be specified when you install Archiving Server; in most cases, you will not need to change the location of that database.
However, if a hardware failure or other problem should occur, you can point Archiving Server to a new database by using the Set-CsArchivingServer cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsArchivingServer -Identity "ArchivingServer:atl-cs-001.litwareinc.com" -ArchivingDatabase "ArchivingDatabase:atl-sql-001.litwareinc.com"
```

The preceding command changes the location of the Archiving database for the ArchivingServer:atl-cs-001.litwareinc.com Archiving Server .
In this example, the new database is located at ArchivingDatabase:atl-sql-001.litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 changes the location of the Archiving database for the ArchivingServer:atl-cs-001.litwareinc.com Archiving Server .
In this example, the new database is located at ArchivingDatabase:atl-sql-001.litwareinc.com.

Set-CsArchivingServer -Identity "ArchivingServer:atl-cs-001.litwareinc.com" -ArchivingDatabase "ArchivingDatabase:atl-sql-001.litwareinc.com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 changes the location of the Archiving database for the ArchivingServer:atl-cs-001.litwareinc.com Archiving Server .
In this example, the new database is located at ArchivingDatabase:atl-sql-001.litwareinc.com.

Set-CsArchivingServer -Identity "ArchivingServer:atl-cs-001.litwareinc.com" -ArchivingDatabase "ArchivingDatabase:atl-sql-001.litwareinc.com"

## PARAMETERS

### -Identity
Service location of the Archiving Server instance to be modified.
For example: -Identity ArchivingServer:atl-cs-001.litwareinc.com.
You can retrieve the service location for all your Archiving servers by running this command:

Get-CsService -ArchivingServer | Select-Object Identity

Note that you can leave off the prefix "ArchivingServer:" when specifying an Archiving server.
For example: -Identity "atl-cs-001.litwareinc.com".

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchivingDatabase
Service location where the new Archiving database is located.
For example: -ArchivingDatabase ArchivingDatabase:atl-sql-001.litwareinc.com.
Make sure you use the service location and not the SQL Server path when specifying the database location.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Set-CsArchivingServer does not accept pipelined input.

###  
None.
The Set-CsArchivingServer cmdlet does not accept pipelined input.

## OUTPUTS

###  
Set-CsArchivingServer does not return any objects or values.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.Xds.DisplayArchivingServer object.

###  
The Set-CsArchivingServer cmdlet does not return any objects or values.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.Xds.DisplayArchivingServer object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d4e51c14-34a6-4134-bb71-87bc2f11092d(OCS.14).aspx)

[Get-CsArchivingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/d4e51c14-34a6-4134-bb71-87bc2f11092d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d4e51c14-34a6-4134-bb71-87bc2f11092d(OCS.16).aspx)

