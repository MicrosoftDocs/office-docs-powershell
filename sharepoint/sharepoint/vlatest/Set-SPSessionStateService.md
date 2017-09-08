---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPSessionStateService

## SYNOPSIS
Updates the credentials that are used to communicate with the state service database.

## SYNTAX

```
Set-SPSessionStateService [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-DatabaseCredentials <PSCredential>] [-SessionTimeout <Int32>] [-WhatIf]
```

## DESCRIPTION
The Set-SPSessionStateService cmdlet updates the credentials that are used to communicate with the state service database.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- (SharePoint Server 2013)
```
C:\PS>Set-SPSessionStateService -SessionTimeout 120
```

This example changes the ASP.NET session state time-out to 2 hours.

### --------------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>Set-SPSessionStateService -SessionTimeout 120
```

This example changes the ASP.NET session state time-out to 2 hours.

## PARAMETERS

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCredentials
Specifies the database credentials for SQL Authentication that are used to access the state service database.
If this parameter is not specified, Windows authentication is used.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionTimeout
Specifies the time, in minutes that an ASP.NET session will remain active with no user activity.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

