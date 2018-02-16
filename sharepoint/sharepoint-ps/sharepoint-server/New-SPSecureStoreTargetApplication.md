---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: New-SPSecureStoreTargetApplication
schema: 2.0.0
---

# New-SPSecureStoreTargetApplication

## SYNOPSIS
Creates a new Secure Store target application.


## SYNTAX

```
New-SPSecureStoreTargetApplication -ApplicationType <TargetApplicationType> -FriendlyName <String>
 -Name <String> [-AssignmentCollection <SPAssignmentCollection>] [-ContactEmail <String>]
 [-SetCredentialsUri <Uri>] [-TimeoutInMinutes <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The `New-SPSecureStoreTargetApplication` cmdlet creates a new Secure Store Target application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1------------------
```
C:\PS>New-SPSecureStoreTargetApplication -Name "ContosoTargetApplication" -FriendlyName "Contoso Target Application" -ApplicationType Group
```

This example creates a new group type target application with the given name and friendly display name.


## PARAMETERS

### -ApplicationType
Specifies the type of target application.

The type must be one of the following: Individual, Group, IndividualWithTicketing, GroupWithTicketing, RestrictedIndividual, or RestrictedGroup.

```yaml
Type: TargetApplicationType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FriendlyName
Specifies the name of the new target application.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the display name of the new target application.

```yaml
Type: String
Parameter Sets: (All)
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

### -ContactEmail
Specifies the contact information for the target application.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetCredentialsUri
Specifies the URI for setting the user application credentials.

The type must be a valid URI, in the form file:\\\\server_name\sitedocs.

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

### -TimeoutInMinutes
The time, in minutes, a ticket is valid if it is not redeemed by the target application.
Make sure that the ticket time-out value is long enough to last between the time when the ticket is issued to the time that it is redeemed The default value is 2.

The type must be a valid integer.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
