---
applicable: SharePoint Server 2016
schema: 2.0.0
---

# Set-SPProjectPermissionMode

## SYNOPSIS
Changes the permission mode for a Project Web App instance.
Running this cmdlet deletes all security settings and reverts to the default settings for the specified mode.

## SYNTAX

```
Set-SPProjectPermissionMode [-Url] <Uri> [-Mode] <PermissionMode>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Set-SPProjectPermissionMode cmdlet changes the permission mode for the specified Project Web App instance.

Switching security modes deletes all permissions configuration information for the specified Project Web App instance and reverts to the default settings for the specified mode.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### --------------EXAMPLE 1------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPPRojectPermissionMode -Url http://AppServer/pwa -AdministratorAccount contoso\John.Woods -Mode ProjectServer
```

This example shows the syntax for transitioning a server into Project Server permission mode.

### --------------EXAMPLE 2------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPPRojectPermissionMode -Url http://AppServer/pwa -AdministratorAccount contoso\John.Woods -Mode SharePoint
```

This example shows the syntax for transitioning a server into SharePoint permission mode.

## PARAMETERS

### -Url
Specifies the URL of the Project Web App instance for which the permission mode is to be changed.

The type must be a valid URL, in the form http://\<ServerName\>/\<PWAName\>.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode
Specifies the mode into which the instance should be changed.

The type must be a valid permission mode, in the form SharePoint or ProjectServer.

```yaml
Type: PermissionMode
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 2
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
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPProjectPermissionMode]()

[Invoke-SPProjectActiveDirectoryGroupSync]()

