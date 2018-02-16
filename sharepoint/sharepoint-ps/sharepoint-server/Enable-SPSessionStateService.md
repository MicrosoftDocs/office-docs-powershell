---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Enable-SPSessionStateService
schema: 2.0.0
---

# Enable-SPSessionStateService

## SYNOPSIS
Creates a session state database and turns on the session state service.

## SYNTAX

### AdvancedProvision
```
Enable-SPSessionStateService -DatabaseName <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-DatabaseCredentials <PSCredential>] [-DatabaseServer <String>] [-SessionTimeout <Int32>] [-WhatIf]
 [<CommonParameters>]
```

### DefaultProvision
```
Enable-SPSessionStateService [-DefaultProvision] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-SessionTimeout <Int32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Enable-SPSessionStateService cmdlet creates a session state database, installs the ASP.NET session state schema, and updates the Web.config files on the farm to turn on the session state service.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
C:\PS>Enable-SPSessionStateService -DefaultProvision
```

This example enables a ASP.NET session state on a SharePoint Server farm that uses the defaults (database hosted on the configuration database SQL Server, using Windows authentication, 60-minute session time-out).

### --------------EXAMPLE 2----------------- 
```
C:\PS>Enable-SPSessionStateService -DatabaseName "Session State Database" -DatabaseServer "localhost" -SessionTimeout 120
```

This example enables a ASP.NET session state on a SharePoint Server farm that uses a custom database name, database server, session time-out of 120 minutes, and Windows credentials (due to the lack of a DatabaseCredentials parameter).

## PARAMETERS

### -DatabaseName
Specifies the name of the database for the session state service.

The type must be a valid name of a SQL Server database; for example, SessionStateDB1.

```yaml
Type: String
Parameter Sets: AdvancedProvision
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultProvision
Specifies that the default provisioning settings are used.
The default provisioning settings are: Windows Authentication, Auto SQL Server (configuration database), and Auto Catalog Name.

```yaml
Type: SwitchParameter
Parameter Sets: DefaultProvision
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCredentials
Specifies the database credentials for SQL Authentication used to access the session state service database.
If this parameter is not specified, Windows authentication is used.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: AdvancedProvision
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the host SQL Server for the state service database.

The type must be a valid SQL Server host name; for example, SQLServerHost1.

```yaml
Type: String
Parameter Sets: AdvancedProvision
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionTimeout
Specifies the time, in minutes, that a ASP .NET session state service will remain active with no user activity.
The default value is 60.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

