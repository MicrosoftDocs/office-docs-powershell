---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsCertificate

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes a certificate previously marked as being available for use by Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Removes a certificate previously marked as being available for use by Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Removes a certificate previously marked as being available for use by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsCertificate [-Type <CertType[]>] [-NetportId <String>] [-Force] [-Report <String>] [-WhatIf]
 [-Confirm] [[-Identity] <XdsIdentity>] [-Previous] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync Server 2010 uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server, and vice versa.
In order to fully implement Lync Server, you will need to have the appropriate certificates assigned to the appropriate server roles.

The Remove-CsCertificate cmdlet provides a way for you to remove certificates currently in use by Lync Server.
Remove-CsCertificate does not actually delete the certificate itself; instead, it marks the certificate as no longer being available for use by Lync Server, removes any certificate bindings, and revokes access permissions to the certificate (assuming no other service is using the certificate).
Among other things, this means that the certificate will no longer appear when you run the Get-CsCertificate cmdlet.

To again use the certificate with Lync Server you will need to reassign the certificate to Lync Server 2010 by using the Set-CsCertificate cmdlet.

If you try to remove a certificate that is currently in use, Remove-CsCertificate will be ask if you are sure that you want to remove the certificate; the certificate cannot be removed until you respond to that prompt.
To bypass the prompt, and silently delete a certificate even if it is currently in use, add the Force parameter to your command:

Remove-CsCertificate -Type WebServicesExternal -Force

Who can run this cmdlet: You must be a local administrator and a member of the domain in order to run the Remove-CsCertificate cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsCertificate"}

**Below Content Applies To:** Lync Server 2013

Lync Server uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server, and vice versa.
In order to fully implement Lync Server, you will need to have the appropriate certificates assigned to the appropriate server roles.

The Remove-CsCertificate cmdlet provides a way for you to remove certificates currently in use by Lync Server.
Remove-CsCertificate does not actually delete the certificate itself; instead, it marks the certificate as no longer being available for use by Lync Server, removes any certificate bindings, and revokes access permissions to the certificate (assuming no other service is using the certificate).
Among other things, this means that the certificate will no longer appear when you run the Get-CsCertificate cmdlet.

To again use the certificate with Lync Server you will need to reassign the certificate to Lync Server by using the Set-CsCertificate cmdlet.

If you try to remove a certificate that is currently in use, Remove-CsCertificate will be ask if you are sure that you want to remove the certificate; the certificate cannot be removed until you respond to that prompt.
To bypass the prompt, and silently delete a certificate even if it is currently in use, add the Force parameter to your command:

Remove-CsCertificate -Type WebServicesExternal -Force

Who can run this cmdlet: You must be a local administrator and a member of the domain in order to run the Remove-CsCertificate cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsCertificate"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 uses certificates as a way for servers and server roles to verify their identities; for example, an Edge Server uses certificates to verify that the computer it is communicating with really is a Front End Server, and vice versa.
In order to fully implement Skype for Business Server 2015, you will need to have the appropriate certificates assigned to the appropriate server roles.

The Remove-CsCertificate cmdlet provides a way for you to remove certificates currently in use by Skype for Business Server 2015.
The Remove-CsCertificate cmdlet does not actually delete the certificate itself; instead, it marks the certificate as no longer being available for use by Skype for Business Server 2015, removes any certificate bindings, and revokes access permissions to the certificate (assuming no other service is using the certificate).
Among other things, this means that the certificate will no longer appear when you run the Get-CsCertificate cmdlet.

To again use the certificate with Skype for Business Server 2015 you will need to reassign the certificate to Skype for Business Server 2015 by using the Set-CsCertificate cmdlet.

If you try to remove a certificate that is currently in use, the Remove-CsCertificate cmdlet will be ask if you are sure that you want to remove the certificate; the certificate cannot be removed until you respond to that prompt.
To bypass the prompt, and silently delete a certificate even if it is currently in use, add the Force parameter to your command:

Remove-CsCertificate -Type WebServicesExternal -Force



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsCertificate -Type WebServicesExternal
```

The command shown in Example 1 deletes all the WebServicesExternal certificates available to Lync Server.
If any of these certificates are currently being used, Remove-CsCertificate will ask you if you are sure you want to remove the certificate; you must respond to that prompt before the command can complete.
To bypass the confirmation prompt, use the Force parameter:

Remove-CsCertificate -Type WebServicesExternal -Force

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes all the WebServicesExternal certificates available to Lync Server.
If any of these certificates are currently being used, Remove-CsCertificate will ask you if you are sure you want to remove the certificate; you must respond to that prompt before the command can complete.
To bypass the confirmation prompt, use the Force parameter:

Remove-CsCertificate -Type WebServicesExternal -Force

Remove-CsCertificate -Type WebServicesExternal

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes all the WebServicesExternal certificates available to Skype for Business Server 2015.
If any of these certificates are currently being used, the Remove-CsCertificate cmdlet will ask you if you are sure you want to remove the certificate; you must respond to that prompt before the command can complete.
To bypass the confirmation prompt, use the Force parameter:

Remove-CsCertificate -Type WebServicesExternal -Force

Remove-CsCertificate -Type WebServicesExternal

## PARAMETERS

### -Type
**Below Content Applies To:** Lync Server 2010

Type of certificate to be deleted.
Certificate types include (but are not limited to):

AccessEdgeExternal

AudioVideoAuthentication

DataEdgeExternal

Default

External

Internal

PICWebService (Microsoft Lync Online 2010 only)

ProvisionService (Microsoft Lync Online 2010 only)

UserDefined

WebServicesExternal

WebServicesInternal

WsFedTokenTransfer

For example, this syntax deletes the Default certificate: -Type Default.

You can delete multiple types in a single command by separating the certificate types with commas:

-Type Internal,External,Default



**Below Content Applies To:** Lync Server 2013

Type of certificate to be deleted.
Certificate types include (but are not limited to):

AccessEdgeExternal

AudioVideoAuthentication

DataEdgeExternal

Default

External

Internal

PICWebService (Microsoft Lync Online 2010 only)

ProvisionService (Microsoft Lync Online 2010 only)

WebServicesExternal

WebServicesInternal

WsFedTokenTransfer

For example, this syntax deletes the Default certificate: -Type Default.

You can delete multiple types in a single command by separating the certificate types with commas:

-Type Internal,External,Default



**Below Content Applies To:** Skype for Business Server 2015

Type of certificate to be deleted.
Certificate types include (but are not limited to):

AccessEdgeExternal

AudioVideoAuthentication

DataEdgeExternal

Default

External

Internal

PICWebService (Skype for Business Online only)

ProvisionService (Skype for Business Online only)

WebServicesExternal

WebServicesInternal

WsFedTokenTransfer

For example, this syntax deletes the Default certificate: -Type Default.

You can delete multiple types in a single command by separating the certificate types with commas:

-Type Internal,External,Default



```yaml
Type: CertType[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetportId
Reserved for future use.
This parameter is for certificates dedicated to a specific port, a scenario not yet supported by Lync Server.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Bypasses the confirmation prompt that typically occurs if you attempt to delete a certificate that is currently in use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to record detailed information about the procedures carried out by Remove-CsCertificate.
The parameter value should be the full path to the HTML file to be generated; for example: -Report C:\Logs\Certificates.html.
If the specified file already exists it will automatically be overwritten with the new information.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to record detailed information about the procedures carried out by the Remove-CsCertificate cmdlet.
The parameter value should be the full path to the HTML file to be generated; for example: -Report C:\Logs\Certificates.html.
If the specified file already exists it will automatically be overwritten with the new information.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
When set to Global, removes the certificate from the global scope.
When not specified, certificates are removed from the local computer.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Previous
When specified, removes the previously-assigned certificate instead of the currently-assigned certificate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Remove-CsCertificate does not accept pipelined input.

###  
None.
The Remove-CsCertificate cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, Remove-CsCertificate deletes instances of the Microsoft.Rtc.Management.Deployment.CertificateReference object.

###  
None.
Instead, the Remove-CsCertificate cmdlet deletes instances of the Microsoft.Rtc.Management.Deployment.CertificateReference object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b7a83a58-9d3f-458a-867e-44466c9817dc(OCS.14).aspx)

[Get-CsCertificate]()

[Import-CsCertificate]()

[Request-CsCertificate]()

[Set-CsCertificate]()

[Online Version](http://technet.microsoft.com/EN-US/library/b7a83a58-9d3f-458a-867e-44466c9817dc(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b7a83a58-9d3f-458a-867e-44466c9817dc(OCS.16).aspx)

