---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPUser
schema: 2.0.0
---

# Get-SPUser

## SYNOPSIS

Returns the user account or accounts that match a given search criteria.



## SYNTAX 

```
Get-SPUser [[-Identity] <SPUserPipeBind>] -Web <SPWebPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Group <SPGroupPipeBind>] [-Limit <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPUser cmdlet returns all SharePoint user accounts that match the scope given by the Identity, Web, or Group parameters.

The Identity parameter can use the alias of a user for returning exact matches.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
PS C:\>Get-SPUser -Web 'https://sharepoint.contoso.com' -Group 'Viewers'
```

This example returns all members of the SharePoint group Viewers on the site https://sharepoint.contoso.com.


### ------------------EXAMPLE 2------------------ 
```
PS C:\>Get-SPUser -Identity 'i:0#.w|contoso\jdoe' -Web 'https://sharepoint.contoso.com'
```

This example returns the specific user identified via Windows Claims on the site https://sharepoint.contoso.com.

### ------------------EXAMPLE 3------------------ 
```
PS C:\>Get-SPUser -Identity 'contoso\jdoe' -Web 'https://sharepoint.contoso.com'
```

This example returns the specific user identified via Classic Windows authentication on the site https://sharepoint.contoso.com.

## PARAMETERS

### -Identity
Specifies the ID or login name of the user to be returned.

The type must be a valid ID or login name, such as the format of 'CONTOSO\jdoe' for Classic Windows Authentication or 'i:0#.w|CONTOSO\jdoe' for Windows Claims.

```yaml
Type: SPUserPipeBind
Parameter Sets: (All)
Aliases: UserAlias
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Web
Specifies the Web site to be used as a scope.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a SharePoint Foundation Web site (for example, MySPSite1); or an instance of a valid SPWeb object.

```yaml
Type: SPWebPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Group
Specifies the user group to which the new user belongs.

```yaml
Type: SPGroupPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit
Specifies the maximum number of users to return.
The default value is 500.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

