---
external help file: 
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Invoke-SPProjectActiveDirectoryGroupSync
schema: 2.0.0
---

# Invoke-SPProjectActiveDirectoryGroupSync

## SYNOPSIS
Manually starts the synchronization job to synchronize Project Server group membership with the specified Active Directory groups.

## SYNTAX

```
Invoke-SPProjectActiveDirectoryGroupSync [-Url] <Uri> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
In Project Server permission mode, groups can be created to assign permissions and synced with Active Directory groups to determine group membership.
The Invoke-SPProjectActiveDirectoryGroupSync cmdlet manually starts the job that synchronizes the group membership from Active Directory into Project Server.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### --------------EXAMPLE 1------------------- 
```
PS C:\>Invoke-SPProjectActiveDirectoryGroupSync -Url http://AppServer/pwa
```

This example synchronizes group membership for the specified PWA instance.

## PARAMETERS

### -Url
Specifies the URL of the Project Web App (PWA) instance where you want to start the Active Directory sync.

The type must be a valid URL, in the form http://\<ServerName\>/\<PWAName\>.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

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
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

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

[Get-SPProjectPermissionMode](Get-SPProjectPermissionMode.md)

[Set-SPProjectPermissionMode](Set-SPProjectPermissionMode.md)

