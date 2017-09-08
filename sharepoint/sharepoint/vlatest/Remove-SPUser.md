---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Remove-SPUser

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Remove-SPUser [-Identity] <SPUserPipeBind> -Web <SPWebPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Group <SPGroupPipeBind>] [-WhatIf]
```

## DESCRIPTION
The Remove-SPUser cmdlet specifies the identity and user group from which a user is to be removed.
The Remove-SPUser cmdlet does not remove the user from Active Directory Domain Services (AD DS).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2013)
```
C:\PS>Remove-SPUser "Contoso \jdoe" -web http://test/web1

C:\PS>Get-SPWeb "http://test/web1" | Remove-SPUser "Contoso\jdoe"
```

This example removes the user (Contoso\jdoe) from the Web application http://test/web1.

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>Remove-SPUser "Contoso \jdoe" -web http://test/web1

C:\PS>Get-SPWeb "http://test/web1" | Remove-SPUser "Contoso\jdoe"
```

This example removes the user (Contoso\jdoe) from the Web application http://test/web1.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPSite http://contoso.com |Get-SPWeb |Remove-SPUser "Contoso\jdoe"
```

This syntax removes the user (Contoso\Jdoe) from every Web in a site collection located at http://contoso.com.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPSite http://contoso.com |Get-SPWeb |Remove-SPUser "Contoso\jdoe"
```

This syntax removes the user (Contoso\Jdoe) from every Web in a site collection located at http://contoso.com.

## PARAMETERS

### -Identity
Specifies the GUID, the user name, or SPUser object to remove.

The type must be a valid GUID of the user, in the form 1234-5678-9876-0987.

```yaml
Type: SPUserPipeBind
Parameter Sets: (All)
Aliases: UserAlias

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Web
Specifies the name of the URL or GUID from which the user is to be removed.
This parameter is needed only if the identity provided is the user name.

The type must be a valid URL, in the form http://server_name, or a GUID, in the form 1234-5678-9807.

```yaml
Type: SPWebPipeBind
Parameter Sets: (All)
Aliases: 

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

### -Group
The user only gets removed from that group.
Otherwise, the user gets removed from the site.

```yaml
Type: SPGroupPipeBind
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

