---
applicable: SharePoint Server 2016
schema: 2.0.0
---

# Get-SPProjectPermissionMode

## SYNOPSIS
Returns the permission mode for a Project Web App (PWA) instance.

## SYNTAX

```
Get-SPProjectPermissionMode [-Url] <Uri> [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPProjectPermissionMode cmdlet returns the presently configured permission mode for the provided PWA instance.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### --------------EXAMPLE 1------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPProjectPermissionMode -Url http://AppServer/pwa
```

This example returns the permission mode setting for a PWA instance.

## PARAMETERS

### -Url
Specifies the URL of the PWA instance for which you want to retrieve the permission mode.

The type must be a valid URL, in the form http://\<ServerName\>/\<PWASite\>.

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

[Set-SPProjectPermissionMode]()

[Invoke-SPProjectActiveDirectoryGroupSync]()

