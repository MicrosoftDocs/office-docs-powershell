---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/approve-spotenantserviceprincipalpermissionrequest
applicable: SharePoint Online
title: Approve-SPOTenantServicePrincipalPermissionRequest
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Approve-SPOTenantServicePrincipalPermissionRequest

## SYNOPSIS

Approves a permission request for the current tenant's "SharePoint Online Client" service principal

## SYNTAX

### Default

```powershell
Approve-SPOTenantServicePrincipalPermissionRequest -RequestId <Guid>
```

## DESCRIPTION

Approves a permission request for the current tenant's "SharePoint Online Client" service principal

The return value of a successful call is a permission grant object. See the [Description section of Get-SPOTenantServicePrincipalPermissionGrants](https://docs.microsoft.com/powershell/module/sharepoint-online/get-spotenantserviceprincipalpermissiongrants#description) for more information about a permission grant object.

To get the collection of permission grants for the "SharePoint Online Client" service principal, use the [Get-SPOTenantServicePrincipalPermissionGrants](https://docs.microsoft.com/powershell/module/sharepoint-online/get-spotenantserviceprincipalpermissiongrants) command.

Approving a permission request also removes that request from the list of permission requests.

## EXAMPLES

### ------------------EXAMPLE 1------------------

```powershell
$requests = Get-SPOTenantServicePrincipalPermissionRequests
$requestToApprove = $requests | ? { $_.Resource -eq 'Office 365 SharePoint Online' -and $_.Scope -eq 'MyFiles.Read' } | Select-Object -First 1

if ($requestToApprove -ne $null)
{
    Approve-SPOTenantServicePrincipalPermissionRequest -RequestId $requestToApprove.Id
}
```

Approves the permission request for the 'Office 365 SharePoint Online' resource with scope claim 'MyFiles.Read'.
If there is no request with those properties, then no approve action will be taken.

## PARAMETERS

### -RequestId

The ID of the permission request to approve

```yaml
Type: Guid

Required: True
Position: Named
Accept pipeline input: False
```
