---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPAuthenticationProvider
schema: 2.0.0
---

# Get-SPAuthenticationProvider

## SYNOPSIS

Returns an authentication provider.



## SYNTAX

```
Get-SPAuthenticationProvider [[-Identity] <SPAuthenticationProviderPipeBind>]
 [-WebApplication] <SPWebApplicationPipeBind> [-Zone] <SPUrlZone>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPAuthenticationProvider cmdlet returns an authentication provider on a specified Web application zone.
The following are the standard authentication providers available for SharePoint Products: NTLM, Classic NTLM, Negotiate, and Classic Negotiate.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -----------------EXAMPLE 1----------------- 
```
C:\PS>New-SPWebApplication http://sharepointonline.com -AuthenticationProvider (Get-SPAuthenticationProvider "LiveID STS")
```

This example registers the LiveID STS authentication provider for the new Web application.

### -----------------EXAMPLE 2----------------- 
```
C:\PS>New-SPWebApplication http://contoso.com -AuthenticationProvider (New-SPAuthenticationProvider -ASPNetMembershipProvider "myMembershipProvider" -ASPNetRoleProvider "myRoleProvider")
```

This example registers ASPNet for the new Web application.
Note that ASPNET memberships are not persisted and must be re-created every use.

### -----------------EXAMPLE 3----------------- 
```
C:\PS>New-SPWebApplication http://contoso.com -AuthenticationProvider (Get-SPAuthenticationProvider "NTLM")
```

This example registers the NTLM authentication provider for the new Web application.
This command is equivalent to the command New-SPWebApplication http://contoso.com; NTLM is default authentication provider.

### -----------------EXAMPLE 4----------------- 
```
C:\PS>$ip = @( (Get-SPAuthenticationProvider "LiveID STS"), (New-SPAuthenticationProvider -ASPNetMembershipProvider "myMembershipProvider" -ASPNetRoleProvider "myRoleProvider"), (Get-SPAuthenticationProvider "NTLM")) )
New-SPWebApplication http://contoso.com -AuthenticationProvider $ip
```

This example registers the NTLM, ASPNet, and LiveID STS authentication providers for the new Web application.

### -----------------EXAMPLE 5----------------- 
```
C:\PS>New-SPWebApplication http://contoso.com -AuthenticationProvider (Get-SPAuthenticationProvider "Legacy NTLM")
```

This example registers the Legacy NTLM authentication provider for the new Web application.

## PARAMETERS

### -Identity
Specifies the authentication provider to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a SharePoint authentication provider (for example, NTLM); or an instance of a valid SPAuthenticationProvider object.

```yaml
Type: SPAuthenticationProviderPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebApplication
Returns the content databases for the specified Web application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of SharePoint Web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Zone
Specifies the Web application zone or zones for which to return the authentication provider.

The type must be any one of the valid zones: Default, Intranet, Internet, Extranet, or Custom.

```yaml
Type: SPUrlZone
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 3
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

