---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPContentDeploymentPath
schema: 2.0.0
---

# Set-SPContentDeploymentPath

## SYNOPSIS
Sets properties of a content deployment path.


## SYNTAX

```
Set-SPContentDeploymentPath [-Identity] <SPContentDeploymentPathPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Authentication <PathAuthenticationOption>]
 [-CompressionEnabled] [-DeploySecurityInformation <SPIncludeSecurity>] [-DeployUserNamesEnabled]
 [-Description <String>] [-DestinationCentralAdministrationURL <Uri>] [-EventReceiversEnabled]
 [-KeepTemporaryFilesOptions <TemporaryFilesOption>] [-Name <String>] [-PathAccount <PSCredential>]
 [-PathEnabled] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPContentDeploymentPath` cmdlet sets the properties of a content deployment path for a content deployment job.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
C:\PS>Get-SPContentDeploymentPath "Path 1" | Set-SPContentDeploymentPath -PathEnabled:$false
```

This example sets the deployment path Path 1 to be disabled.


## PARAMETERS

### -Identity
Specifies the content deployment path to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a content deployment job (for example; DeployPath1); or an instance of a valid SPContentDeploymentPath object.

```yaml
Type: SPContentDeploymentPathPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -Authentication
Sets the Windows-based authentication type that the source front-end Web server uses to communicate with the destination Web application.

The type must be one of the following values: WindowsAuth or BasicAuth.

```yaml
Type: PathAuthenticationOption
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompressionEnabled
Turns on compression during the export.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeploySecurityInformation
Specifies the user and group information to include during the export operation for this content deployment path.
The default value is All.

The type must be one of the following values: None, All, or WssOnly- Applies only SharePoint Foundation security settings.
Includes user memberships and role assignments such as default roles, for example, Web Designer or any custom roles that extend from the default roles.
The access control list (ACL) for each object is migrated.
No user information defined in the DAP or LDAP servers is included.

```yaml
Type: SPIncludeSecurity
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeployUserNamesEnabled
Specify to enable event receivers during import.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Sets the description for the content deployment path.
The description can contain a maximum of 4096 alphanumeric characters.

The type must be a valid string.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DestinationCentralAdministrationURL
Specifies the SharePoint Central Administration URL for the destination farm.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventReceiversEnabled
Turns on event receivers during import.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepTemporaryFilesOptions
Specifies that temporary files are kept after content deployment is finished.

The type must be one of the following values: Never, Always, or OnFailure.

```yaml
Type: TemporaryFilesOption
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the content deployment path.

The type must be a valid name of a content deployment path; for example, DeploymentPath1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PathAccount
Specifies the user ID that is an administrator on the Central Administration page on the destination farm.

The type must be a valid SharePoint user.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PathEnabled
Enables the content deployment path.

```yaml
Type: SwitchParameter
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

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
